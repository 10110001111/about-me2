import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { commands, ASCII_ART } from './commands';

export type HistoryItem = {
  type: 'input' | 'output' | 'error';
  content: string;
};

export function useTerminal() {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHistory([
      { type: 'output', content: ASCII_ART },
      { type: 'output', content: '\nWelcome to my profile terminal v2.0.0' },
      { type: 'output', content: 'Type "help" for available commands.\n' },
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const computeSuggestion = (value: string) => {
    if (!value.trim()) {
      setSuggestion('');
      return;
    }
    const matches = Object.keys(commands).filter(cmd =>
      cmd.startsWith(value.toLowerCase())
    );
    setSuggestion(matches.length === 1 ? matches[0].slice(value.length) : '');
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    computeSuggestion(value);
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    setHistory(prev => [...prev, { type: 'input', content: cmd }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setSuggestion('');

    if (trimmedCmd === '') return;

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (commands[trimmedCmd]) {
      setHistory(prev => [...prev, { type: 'output', content: commands[trimmedCmd]() }]);
    } else {
      setHistory(prev => [
        ...prev,
        { type: 'error', content: `Command not found: ${trimmedCmd}\nType 'help' for available commands.` },
      ]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        handleCommand(input);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const matches = Object.keys(commands).filter(cmd =>
        cmd.startsWith(input.toLowerCase())
      );
      if (matches.length === 1) {
        setInput(matches[0]);
        setSuggestion('');
      } else if (matches.length > 1) {
        setHistory(prev => [
          ...prev,
          { type: 'input', content: input },
          { type: 'output', content: matches.join('    ') },
        ]);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
        setSuggestion('');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
          setSuggestion('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
          setSuggestion('');
        }
      }
    }
  };

  return {
    input,
    suggestion,
    setInput: handleInputChange,
    history,
    terminalRef,
    inputRef,
    handleKeyDown,
  };
}
