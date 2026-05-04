export type Command = () => string;
export type Commands = Record<string, Command>;

export const ASCII_ART = `
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║     ██╗    ██╗ █████╗ ███████╗██╗                                         ║
║     ██║    ██║██╔══██╗██╔════╝██║                                         ║
║     ██║ █╗ ██║███████║███████╗██║                                         ║
║     ██║███╗██║██╔══██║╚════██║██║                                         ║
║     ╚███╔███╔╝██║  ██║███████║██║                                         ║
║      ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚═╝                                         ║
║                                                                           ║
║    > CLOUD COMPUTING SPECIALIST                                           ║
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
  certifications  - Cloud certifications and credentials
  skills          - Multi-cloud skills and expertise
  domains         - Cloud operational domains
  arsenal         - Tools and technologies across all clouds
  collaborate     - View collaboration interests
  contact         - Get contact information
  clear           - Clear terminal screen
  exit            - Close terminal session
`,
  about: () => `
CLOUD COMPUTING SPECIALIST

Current Focus:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Multi-cloud architect and security specialist with hands-on experience
across AWS, GCP, Azure, Oracle Cloud, and Alibaba Cloud. Designing
secure, scalable cloud infrastructure with a focus on automation,
identity management, and cloud-native security.

Mission: Architect and secure cloud environments at enterprise scale
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`,
  whoami: () => `
root@wasi:~$ id
uid=0(wasi) gid=0(cloud) groups=0(cloud),1(security),2(devops)

Current User: Wasi
Role: Cloud Computing Specialist
Cert: AWS Certified Security - Specialty
Status: ACTIVE
Location: Cloud Operations
`,
  certifications: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    CLOUD CERTIFICATIONS                       ║
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
║                    MULTI-CLOUD SKILL MATRIX                   ║
╚═══════════════════════════════════════════════════════════════╝

[☁️  AMAZON WEB SERVICES (AWS)]
├── EC2 / VPC / S3       ████████████████████ 95%
├── IAM / Organizations  ████████████████████ 95%
├── GuardDuty / Sec Hub  ████████████████████ 95%
├── Lambda / EventBridge ███████████████████░ 90%
└── KMS / Secrets Mgr    ████████████████████ 95%

[🔵 MICROSOFT AZURE]
├── Azure AD / Entra ID  ███████████████████░ 90%
├── Azure Sentinel        ██████████████████░░ 85%
├── Azure Firewall / NSG  ██████████████████░░ 85%
├── Key Vault             ███████████████████░ 90%
└── AKS / Container Apps  ██████████████████░░ 85%

[🔴 GOOGLE CLOUD (GCP)]
├── IAM / Org Policies    ███████████████████░ 90%
├── Security Cmd Center   ██████████████████░░ 85%
├── Cloud Armor / VPC SC  ██████████████████░░ 85%
├── GKE / Cloud Run       ██████████████████░░ 85%
└── Cloud KMS / Secret Mgr██████████████████░░ 85%

[🔶 ORACLE CLOUD (OCI)]
├── OCI IAM / Policies    ██████████████████░░ 85%
├── Cloud Guard           █████████████████░░░ 80%
├── OCI Vault / Data Safe ██████████████████░░ 85%
└── OCI Networking / LB   ██████████████████░░ 85%

[🟠 ALIBABA CLOUD]
├── RAM / ActionTrail     ██████████████████░░ 85%
├── Cloud Security Center █████████████████░░░ 80%
├── Anti-DDoS / WAF       ██████████████████░░ 85%
└── OSS / KMS             ██████████████████░░ 85%

[⚙️  INFRASTRUCTURE AS CODE]
├── Terraform             ███████████████████░ 90%
├── AWS CDK / CloudForm.  ███████████████████░ 90%
├── Azure Bicep / ARM     ██████████████████░░ 85%
└── Ansible               ██████████████████░░ 85%

[💻 SCRIPTING & AUTOMATION]
├── Python (boto3/SDK)    ████████████████████ 95%
├── Bash                  ███████████████████░ 90%
└── PowerShell            ██████████████████░░ 85%
`,
  domains: () => `
CLOUD OPERATIONAL DOMAINS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[🔒 CLOUD SECURITY]
  ✓ AWS: GuardDuty, Security Hub, Inspector, Macie
  ✓ Azure: Microsoft Defender for Cloud, Sentinel
  ✓ GCP: Security Command Center, Cloud Armor
  ✓ OCI: Cloud Guard, Oracle Data Safe
  ✓ Alibaba: Cloud Security Center, Anti-DDoS

[🔐 IDENTITY & ACCESS MANAGEMENT]
  ✓ AWS IAM, SCPs, IAM Identity Center (SSO)
  ✓ Azure Active Directory / Microsoft Entra ID
  ✓ GCP IAM, Org Policies, Workload Identity
  ✓ OCI IAM, Dynamic Groups, Policies
  ✓ Alibaba RAM, STS, Resource Access Management

[🌐 CLOUD NETWORKING]
  ✓ AWS VPC, Transit Gateway, PrivateLink
  ✓ Azure Virtual Network, ExpressRoute, Firewall
  ✓ GCP VPC, Shared VPC, VPC Service Controls
  ✓ OCI Virtual Cloud Network, FastConnect
  ✓ Alibaba VPC, CEN, Cloud Enterprise Network

[🗝️  DATA PROTECTION & ENCRYPTION]
  ✓ AWS KMS, Secrets Manager, CloudHSM
  ✓ Azure Key Vault, Purview
  ✓ GCP Cloud KMS, Secret Manager
  ✓ OCI Vault, Key Management Service
  ✓ Alibaba KMS, Data Encryption Service

[⚙️  DEVOPS & AUTOMATION]
  ✓ Infrastructure as Code: Terraform, CDK, Bicep
  ✓ CI/CD: GitHub Actions, CodePipeline, Azure DevOps
  ✓ Container orchestration: EKS, AKS, GKE
  ✓ Secrets management: Vault, AWS/Azure/GCP native
  ✓ Policy-as-code: OPA, AWS Config, Azure Policy

[📊 GOVERNANCE & COMPLIANCE]
  ✓ Multi-account / multi-project landing zones
  ✓ CIS Benchmarks across all 5 cloud providers
  ✓ NIST / ISO 27001 / SOC2 / PCI-DSS alignment
  ✓ Automated compliance monitoring and remediation
  ✓ Cloud cost optimization and tagging governance
`,
  arsenal: () => `
class CloudSpecialist:
    def __init__(self):
        self.aws = {
            'security':  ['GuardDuty', 'Security Hub', 'Macie', 'Inspector', 'Detective'],
            'iam':       ['IAM', 'IAM Identity Center', 'Organizations', 'SCP'],
            'network':   ['VPC', 'Network Firewall', 'WAF', 'Shield Advanced', 'PrivateLink'],
            'data':      ['KMS', 'Secrets Manager', 'CloudHSM', 'ACM'],
            'ops':       ['CloudTrail', 'CloudWatch', 'EventBridge', 'Lambda', 'Config'],
            'iac':       ['CloudFormation', 'CDK'],
        }

        self.azure = {
            'security':  ['Defender for Cloud', 'Microsoft Sentinel', 'Entra ID Protection'],
            'iam':       ['Azure AD / Entra ID', 'PIM', 'Conditional Access'],
            'network':   ['Azure Firewall', 'NSG', 'DDoS Protection', 'Front Door WAF'],
            'data':      ['Key Vault', 'Purview', 'Azure Information Protection'],
            'iac':       ['Bicep', 'ARM Templates', 'Azure DevOps'],
        }

        self.gcp = {
            'security':  ['Security Command Center', 'Cloud Armor', 'Chronicle'],
            'iam':       ['Cloud IAM', 'Org Policies', 'Workload Identity Federation'],
            'network':   ['VPC Service Controls', 'Cloud DNS', 'Cloud CDN'],
            'data':      ['Cloud KMS', 'Secret Manager', 'DLP API'],
            'iac':       ['Deployment Manager', 'Cloud Build'],
        }

        self.oci = {
            'security':  ['Cloud Guard', 'Oracle Data Safe', 'Vulnerability Scanning'],
            'iam':       ['OCI IAM', 'Dynamic Groups', 'Identity Domains'],
            'network':   ['Virtual Cloud Network', 'Web Application Firewall', 'FastConnect'],
            'data':      ['OCI Vault', 'Key Management', 'Data Safe Masking'],
        }

        self.alibaba = {
            'security':  ['Cloud Security Center', 'Anti-DDoS', 'WAF', 'ActionTrail'],
            'iam':       ['RAM', 'STS', 'Resource Directory'],
            'network':   ['VPC', 'CEN', 'Cloud Firewall'],
            'data':      ['KMS', 'Data Encryption Service', 'OSS Server-Side Encryption'],
        }

        self.iac_tools = ['Terraform', 'Ansible', 'Pulumi']
        self.languages  = ['Python + cloud SDKs', 'Bash', 'PowerShell']
        self.cert       = 'AWS Certified Security - Specialty ★'

    def deploy(self):
        return "🟢 Multi-cloud infrastructure secured"

>>> CloudSpecialist().deploy()
'🟢 Multi-cloud infrastructure secured'
`,
  collaborate: () => `
COLLABORATION PROTOCOLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

seeking_partners_for:

  multi_cloud_security:
    - Cross-cloud security posture management
    - Cloud-native threat detection and response
    - Zero-trust architecture across providers

  infrastructure_as_code:
    - Terraform modules for multi-cloud landing zones
    - Policy-as-code with OPA, AWS Config, Azure Policy
    - GitOps workflows for cloud infrastructure

  devsecops:
    - Secure CI/CD pipelines (GitHub Actions, CodePipeline)
    - Container and Kubernetes security on EKS / AKS / GKE
    - Secrets management and rotation automation

  compliance_automation:
    - CIS benchmark enforcement across all cloud providers
    - Automated evidence collection for SOC2 / PCI-DSS
    - Multi-cloud remediation workflows

  ai_cloud:
    - ML-driven cloud anomaly detection
    - Automated incident triage with AI
    - Security data lakes on cloud-native stacks

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
