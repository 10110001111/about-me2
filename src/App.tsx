import { useTerminal } from './useTerminal';
import './App.css';

function App() {
  const { input, suggestion, setInput, history, terminalRef, inputRef, handleKeyDown } = useTerminal();

  return (
    <div className="terminal-container">
      <div className="terminal-wrapper">
        <div
          ref={terminalRef}
          className="terminal-screen"
          onClick={() => inputRef.current?.focus()}
        >
          <div>
            {history.map((item, index) => (
              <div key={index} className="terminal-line">
                {item.type === 'input' && (
                  <div className="terminal-input-line">
                    <span className="terminal-prompt">root@wasi:~$</span>
                    <span className="terminal-input-text">{item.content}</span>
                  </div>
                )}
                {item.type === 'output' && (
                  <pre className="terminal-output">{item.content}</pre>
                )}
                {item.type === 'error' && (
                  <pre className="terminal-error">{item.content}</pre>
                )}
              </div>
            ))}

            <div className="terminal-input-line terminal-input-container">
              <span className="terminal-prompt">root@wasi:~$</span>
              <span className="terminal-input-mirror">{input}</span>
              <span className="terminal-cursor">▊</span>
              {suggestion && <span className="terminal-suggestion">{suggestion}</span>}
            </div>
          </div>

          <input
            ref={inputRef}
            className="terminal-input-hidden"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck={false}
            aria-label="Terminal input"
          />
        </div>

        <div className="terminal-footer">
          <p>Wasi</p>
          <p className="terminal-hint terminal-hint-desktop">
            Press Tab to autocomplete | ↑/↓ to navigate history | Enter to execute
          </p>
          <p className="terminal-hint terminal-hint-mobile">
            Tap the terminal to type | Tab to autocomplete | Enter to execute
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
