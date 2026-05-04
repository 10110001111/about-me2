export type Command = () => string;
export type Commands = Record<string, Command>;

export const ASCII_ART = `
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║      █████╗ ██╗    ██╗███████╗                                            ║
║     ██╔══██╗██║    ██║██╔════╝                                            ║
║     ███████║██║ █╗ ██║███████╗                                            ║
║     ██╔══██║██║███╗██║╚════██║                                            ║
║     ██║  ██║╚███╔███╔╝███████║                                            ║
║     ╚═╝  ╚═╝ ╚══╝╚══╝ ╚══════╝                                            ║
║                                                                           ║
║    > AWS CERTIFIED CLOUD SECURITY SPECIALIST                              ║
║    > SYSTEM STATUS: OPERATIONAL                                           ║
║    > ACCESS LEVEL: PUBLIC                                                 ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝`;

export const commands: Commands = {
  help: () => `
Available commands:
  help            - Show this help message
  about           - Display information about Wasi
  whoami          - Current user information
  certifications  - AWS certifications and credentials
  skills          - Cloud skills and AWS service expertise
  domains         - Cloud operational domains
  arsenal         - AWS tools and technologies
  collaborate     - View collaboration interests
  contact         - Get contact information
  clear           - Clear terminal screen
  exit            - Close terminal session
`,
  about: () => `
AWS CERTIFIED CLOUD SECURITY SPECIALIST

Current Focus:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Specializing in cloud security architecture and AWS-native security
solutions. Designing secure, scalable cloud environments with a focus
on threat detection, identity management, and compliance automation.

Mission: Build and secure cloud infrastructure at enterprise scale
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`,
  whoami: () => `
root@wasi:~$ id
uid=0(wasi) gid=0(cloud) groups=0(cloud),1(security),2(devops)

Current User: Wasi
Role: AWS Certified Cloud Security Specialist
Certification: AWS Certified Security - Specialty
Status: ACTIVE
Location: Cloud Operations
`,
  certifications: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    AWS CERTIFICATIONS                         ║
╚═══════════════════════════════════════════════════════════════╝

[★ AWS CERTIFIED SECURITY - SPECIALTY]
  Issuer  : Amazon Web Services
  Level   : Specialty
  Status  : ACTIVE ✓
  Domains :
    ✓ Threat Detection & Incident Response
    ✓ Security Logging & Monitoring
    ✓ Infrastructure Security
    ✓ Identity & Access Management (IAM)
    ✓ Data Protection & Encryption
    ✓ Management & Security Governance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Verify: https://aws.amazon.com/verification
`,
  skills: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    CLOUD SKILL MATRIX                         ║
╚═══════════════════════════════════════════════════════════════╝

[AWS SECURITY SERVICES]
├── GuardDuty       ████████████████████ 95%
├── Security Hub    ████████████████████ 95%
├── Inspector       ███████████████████░ 90%
├── Macie           ███████████████████░ 90%
├── AWS WAF & Shield████████████████████ 95%
└── CloudTrail/Config███████████████████ 90%

[IDENTITY & ACCESS MANAGEMENT]
├── IAM Policies    ████████████████████ 95%
├── SCP / Orgs      ███████████████████░ 90%
├── AWS SSO / IAM C.████████████████████ 95%
└── Cognito         ██████████████████░░ 85%

[NETWORK SECURITY]
├── VPC / Subnets   ████████████████████ 95%
├── Security Groups ████████████████████ 95%
├── AWS Network FW  ███████████████████░ 90%
└── PrivateLink     ██████████████████░░ 85%

[DATA PROTECTION]
├── KMS             ████████████████████ 95%
├── Secrets Manager ████████████████████ 95%
├── ACM / PKI       ███████████████████░ 90%
└── S3 Encryption   ████████████████████ 95%

[INFRASTRUCTURE AS CODE]
├── Terraform       ███████████████████░ 90%
├── AWS CDK         ███████████████████░ 90%
├── CloudFormation  ███████████████████░ 90%
└── Ansible         ██████████████████░░ 85%

[MONITORING & RESPONSE]
├── CloudWatch      ████████████████████ 95%
├── AWS Config Rules███████████████████░ 90%
├── Lambda (auto)   ███████████████████░ 90%
└── EventBridge     ███████████████████░ 90%

[SCRIPTING & AUTOMATION]
├── Python (boto3)  ████████████████████ 95%
├── Bash            ███████████████████░ 90%
└── PowerShell      ██████████████████░░ 85%
`,
  domains: () => `
CLOUD OPERATIONAL DOMAINS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[🔒 AWS THREAT DETECTION & RESPONSE]
  ✓ Amazon GuardDuty - ML-powered threat detection
  ✓ AWS Security Hub - Unified security findings
  ✓ Amazon Detective - Security investigation
  ✓ Automated incident response with Lambda & EventBridge
  ✓ CloudTrail log analysis and alerting

[🛡️ INFRASTRUCTURE SECURITY]
  ✓ VPC design with defense-in-depth
  ✓ AWS Network Firewall & WAF rule management
  ✓ AWS Shield Advanced DDoS protection
  ✓ EC2 / EKS hardening and patch management
  ✓ Amazon Inspector vulnerability scanning

[🔐 IDENTITY & ACCESS MANAGEMENT]
  ✓ IAM least-privilege policy design
  ✓ Service Control Policies (SCPs) via AWS Organizations
  ✓ AWS IAM Identity Center (SSO)
  ✓ Attribute-Based Access Control (ABAC)
  ✓ Cross-account role federation

[🗝️ DATA PROTECTION]
  ✓ AWS KMS key management and rotation
  ✓ S3 server-side encryption (SSE-KMS, SSE-S3)
  ✓ Secrets Manager & Parameter Store
  ✓ Amazon Macie for sensitive data discovery
  ✓ ACM certificate lifecycle management

[⚙️ CLOUD DEVOPS & AUTOMATION]
  ✓ Infrastructure as Code: Terraform, AWS CDK, CloudFormation
  ✓ Secure CI/CD pipelines (CodePipeline, CodeBuild)
  ✓ Container security: ECS/EKS with OPA/Gatekeeper
  ✓ AWS Config custom rules and conformance packs
  ✓ Policy-as-code enforcement

[📊 GOVERNANCE & COMPLIANCE]
  ✓ AWS Organizations multi-account strategy
  ✓ AWS Control Tower landing zone
  ✓ Security baseline automation
  ✓ CIS AWS Foundations Benchmark
  ✓ NIST / SOC2 / PCI-DSS alignment
`,
  arsenal: () => `
class CloudSecurityEngineer:
    def __init__(self):
        self.threat_detection = [
            'Amazon GuardDuty',
            'AWS Security Hub',
            'Amazon Detective',
            'Amazon Macie',
            'AWS CloudTrail'
        ]

        self.infrastructure_security = [
            'AWS Network Firewall',
            'AWS WAF & Shield Advanced',
            'VPC Flow Logs',
            'Amazon Inspector',
            'AWS Systems Manager'
        ]

        self.identity_access = [
            'AWS IAM & IAM Identity Center',
            'AWS Organizations & SCPs',
            'Amazon Cognito',
            'AWS Directory Service',
            'AWS Verified Access'
        ]

        self.data_protection = [
            'AWS KMS - Key Management Service',
            'AWS Secrets Manager',
            'AWS Certificate Manager (ACM)',
            'Amazon S3 Encryption',
            'AWS CloudHSM'
        ]

        self.iac_automation = [
            'Terraform - Infrastructure as Code',
            'AWS CDK - Cloud Development Kit',
            'AWS CloudFormation',
            'Ansible - Configuration Management',
            'AWS Config + Lambda Rules'
        ]

        self.monitoring_response = [
            'Amazon CloudWatch & Alarms',
            'AWS EventBridge - Event Routing',
            'AWS Lambda - Serverless Automation',
            'AWS Config - Resource Compliance',
            'Amazon SNS - Alerting'
        ]

        self.languages = [
            'Python + boto3 - AWS Automation',
            'Bash - Shell Scripting',
            'PowerShell - Windows/Azure Tasks'
        ]

        self.certification = 'AWS Certified Security - Specialty ★'

    def secure_cloud(self):
        return "🟢 Cloud infrastructure secured"

>>> CloudSecurityEngineer().secure_cloud()
'🟢 Cloud infrastructure secured'
`,
  collaborate: () => `
COLLABORATION PROTOCOLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

seeking_partners_for:

  cloud_security:
    - AWS-native security architecture
    - Multi-account security posture management
    - Cloud threat detection and response

  infrastructure_as_code:
    - Terraform modules for secure AWS landing zones
    - AWS CDK security constructs
    - Policy-as-code with OPA / AWS Config

  devsecops:
    - Secure CI/CD pipeline design
    - Container and Kubernetes security on AWS
    - Secrets management automation

  compliance_automation:
    - CIS / NIST benchmark enforcement
    - AWS Config conformance packs
    - Automated remediation workflows

  ai_cloud:
    - ML-driven cloud anomaly detection
    - Automated incident triage with AI
    - Security data lake on AWS

Status: OPEN FOR COLLABORATION
Priority: HIGH
`,
  contact: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    SECURE COMMUNICATION CHANNEL               ║
╚═══════════════════════════════════════════════════════════════╝

┌─[root@wasi]─[~]
└──╼ $ curl -X GET https://github.com/10110001111

[ESTABLISHING SECURE CONNECTION...]
[HANDSHAKE COMPLETE]
[ENCRYPTION: TLS 1.3]

GitHub Profile:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 https://github.com/10110001111

[CONNECTION STATUS: ACTIVE]
[LATENCY: <10ms]
[SECURITY LEVEL: MAXIMUM]
`,
  clear: () => 'CLEAR',
  exit: () => `
[CLOSING SECURE SESSION...]
[CLEARING SENSITIVE DATA...]
[DISCONNECTING...]

Session terminated. Refresh page to reconnect.
`,
};
