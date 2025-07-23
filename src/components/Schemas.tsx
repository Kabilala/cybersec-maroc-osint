import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  AlertTriangle, 
  Target, 
  Zap, 
  Eye, 
  Clock,
  TrendingUp,
  Users,
  DollarSign,
  Server,
  Wifi,
  Lock,
  Unlock,
  ArrowRight,
  ArrowDown,
  Globe,
  Database,
  HardDrive,
  Monitor,
  Network,
  Router,
  Cpu
} from "lucide-react";

// Schéma d'architecture cybersécurité industrielle
export function CyberArchitectureDiagram() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Architecture Cybersécurité Industrielle - État Actuel</h3>
        
        {/* Zone IT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700">
            <h4 className="font-medium text-blue-200 mb-3 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Zone IT (Enterprise)
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Server className="h-4 w-4 text-blue-400" />
                <span className="text-blue-100">Serveurs d'entreprise</span>
                <Badge variant="outline" className="text-green-400 border-green-400">Sécurisé</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Database className="h-4 w-4 text-blue-400" />
                <span className="text-blue-100">Bases de données</span>
                <Badge variant="outline" className="text-green-400 border-green-400">Chiffré</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-blue-400" />
                <span className="text-blue-100">Postes utilisateurs</span>
                <Badge variant="outline" className="text-yellow-400 border-yellow-400">Partiel</Badge>
              </div>
            </div>
          </div>

          {/* Zone DMZ */}
          <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-700">
            <h4 className="font-medium text-orange-200 mb-3 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Zone DMZ
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Router className="h-4 w-4 text-orange-400" />
                <span className="text-orange-100">Firewall industriel</span>
                <Badge variant="destructive">Manquant</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Eye className="h-4 w-4 text-orange-400" />
                <span className="text-orange-100">Proxy/Inspection</span>
                <Badge variant="destructive">Absent</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Network className="h-4 w-4 text-orange-400" />
                <span className="text-orange-100">Jump servers</span>
                <Badge variant="destructive">Non déployé</Badge>
              </div>
            </div>
          </div>

          {/* Zone OT */}
          <div className="bg-red-900/30 p-4 rounded-lg border border-red-700">
            <h4 className="font-medium text-red-200 mb-3 flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              Zone OT (Industrielle)
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <HardDrive className="h-4 w-4 text-red-400" />
                <span className="text-red-100">SCADA/HMI</span>
                <Badge variant="destructive">Vulnérable</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Cpu className="h-4 w-4 text-red-400" />
                <span className="text-red-100">PLC/RTU</span>
                <Badge variant="destructive">Non sécurisé</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Monitor className="h-4 w-4 text-red-400" />
                <span className="text-red-100">Capteurs/Actionneurs</span>
                <Badge variant="destructive">Exposé</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Flux de données */}
        <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-slate-300">
          <span>IT</span>
          <ArrowRight className="h-4 w-4 text-red-500" />
          <Unlock className="h-4 w-4 text-red-500" />
          <ArrowRight className="h-4 w-4 text-red-500" />
          <span>OT</span>
          <span className="text-red-400 text-xs">(Connexion directe - CRITIQUE)</span>
        </div>
      </div>

      {/* Architecture recommandée */}
      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Architecture Recommandée - Sécurisée</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-700">
            <h4 className="font-medium text-blue-200 mb-2 flex items-center gap-2">
              <Globe className="h-3 w-3" />
              Zone IT
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-green-400" />
                <span className="text-blue-100">EDR/XDR</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="h-3 w-3 text-green-400" />
                <span className="text-blue-100">Chiffrement</span>
              </div>
            </div>
          </div>

          <div className="bg-green-900/30 p-3 rounded-lg border border-green-700">
            <h4 className="font-medium text-green-200 mb-2 flex items-center gap-2">
              <Shield className="h-3 w-3" />
              DMZ Sécurisée
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-green-400" />
                <span className="text-green-100">Firewall industriel</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3 text-green-400" />
                <span className="text-green-100">DPI/IDS</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/30 p-3 rounded-lg border border-yellow-700">
            <h4 className="font-medium text-yellow-200 mb-2 flex items-center gap-2">
              <Network className="h-3 w-3" />
              Zone OT Level 2
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-1">
                <Monitor className="h-3 w-3 text-yellow-400" />
                <span className="text-yellow-100">SIEM industriel</span>
              </div>
              <div className="flex items-center gap-1">
                <Database className="h-3 w-3 text-yellow-400" />
                <span className="text-yellow-100">Historiens</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-900/30 p-3 rounded-lg border border-orange-700">
            <h4 className="font-medium text-orange-200 mb-2 flex items-center gap-2">
              <Cpu className="h-3 w-3" />
              Zone OT Level 1
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-1">
                <Lock className="h-3 w-3 text-orange-400" />
                <span className="text-orange-100">Micro-segmentation</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-orange-400" />
                <span className="text-orange-100">Monitoring ICS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center space-x-2 text-xs text-slate-300">
          <span>IT</span>
          <ArrowRight className="h-3 w-3 text-green-500" />
          <Lock className="h-3 w-3 text-green-500" />
          <ArrowRight className="h-3 w-3 text-green-500" />
          <span>DMZ</span>
          <ArrowRight className="h-3 w-3 text-green-500" />
          <Lock className="h-3 w-3 text-green-500" />
          <ArrowRight className="h-3 w-3 text-green-500" />
          <span>OT L2</span>
          <ArrowRight className="h-3 w-3 text-green-500" />
          <Lock className="h-3 w-3 text-green-500" />
          <ArrowRight className="h-3 w-3 text-green-500" />
          <span>OT L1</span>
          <span className="text-green-400">(Segmentation sécurisée)</span>
        </div>
      </div>
    </div>
  );
}

// Kill Chain Analysis
export function KillChainAnalysis() {
  const killChainSteps = [
    {
      phase: "Reconnaissance",
      description: "Collecte d'informations",
      techniques: ["OSINT", "Scan réseaux", "Social engineering"],
      coverage: 20,
      risk: "MOYEN"
    },
    {
      phase: "Weaponization", 
      description: "Création malware",
      techniques: ["Malware ICS", "Exploit kits", "Documents piégés"],
      coverage: 15,
      risk: "ÉLEVÉ"
    },
    {
      phase: "Delivery",
      description: "Livraison attaque",
      techniques: ["Phishing", "USB", "Supply chain"],
      coverage: 60,
      risk: "CRITIQUE"
    },
    {
      phase: "Exploitation",
      description: "Exécution initiale",
      techniques: ["CVE exploitation", "Credential dumping"],
      coverage: 25,
      risk: "ÉLEVÉ"
    },
    {
      phase: "Installation",
      description: "Persistance",
      techniques: ["Backdoors", "Scheduled tasks", "Services"],
      coverage: 10,
      risk: "CRITIQUE"
    },
    {
      phase: "C2",
      description: "Communication",
      techniques: ["DNS tunneling", "HTTPS", "Covert channels"],
      coverage: 5,
      risk: "CRITIQUE"
    },
    {
      phase: "Actions",
      description: "Objectifs",
      techniques: ["Data exfiltration", "Sabotage", "Espionnage"],
      coverage: 30,
      risk: "CRITIQUE"
    }
  ];

  return (
    <div className="space-y-4">
      {killChainSteps.map((step, index) => (
        <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h4 className="font-medium text-white">{index + 1}. {step.phase}</h4>
              <p className="text-sm text-slate-400">{step.description}</p>
            </div>
            <div className="text-right">
              <Badge variant={
                step.risk === 'CRITIQUE' ? 'destructive' :
                step.risk === 'ÉLEVÉ' ? 'secondary' : 'outline'
              }>
                {step.risk}
              </Badge>
              <p className="text-xs text-slate-400 mt-1">Couverture: {step.coverage}%</p>
            </div>
          </div>
          
          <div className="mb-3">
            <Progress 
              value={step.coverage} 
              className={`h-2 ${
                step.coverage > 50 ? 'bg-green-900' :
                step.coverage > 25 ? 'bg-yellow-900' : 'bg-red-900'
              }`}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {step.techniques.map((technique, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {technique}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// MITRE ATT&CK Coverage
export function MitreAttackCoverage() {
  const mitreData = [
    { tactic: "Initial Access", coverage: 65, techniques: ["T0865 Spearphishing", "T0866 Remote Services", "T0847 USB"] },
    { tactic: "Execution", coverage: 45, techniques: ["T0823 Scripting", "T0834 Native API"] },
    { tactic: "Persistence", coverage: 40, techniques: ["T0891 Valid Accounts", "T0839 Service Execution"] },
    { tactic: "Discovery", coverage: 60, techniques: ["T0840 Network Service Scanning", "T0888 System Info"] },
    { tactic: "Collection", coverage: 30, techniques: ["T0893 Data from Info Repositories"] },
    { tactic: "Impact", coverage: 30, techniques: ["T0809 Data Destruction", "T0881 Service Stop"] }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mitreData.map((tactic, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white">{tactic.tactic}</h4>
                <span className="text-sm text-slate-400">{tactic.coverage}%</span>
              </div>
              
              <Progress 
                value={tactic.coverage} 
                className="mb-3 h-2"
              />
              
              <div className="space-y-1">
                {tactic.techniques.map((technique, i) => (
                  <p key={i} className="text-xs text-slate-400">{technique}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
        <CardContent className="pt-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <span className="font-medium text-amber-800 dark:text-amber-200">Analyse MITRE ATT&CK for ICS</span>
          </div>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            La couverture moyenne de détection des techniques MITRE ATT&CK for ICS au Maroc est de 
            <strong> 45%</strong>, indiquant des lacunes significatives dans la visibilité 
            sur les activités malveillantes ciblant les environnements industriels.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// Composant principal des schémas
export function SchemasSection() {
  return (
    <div className="space-y-6">
      {/* Architecture cybersécurité */}
      <Card>
        <CardHeader>
          <CardTitle>Architecture Cybersécurité Industrielle</CardTitle>
          <CardDescription>
            Comparaison entre l'état actuel et l'architecture recommandée
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CyberArchitectureDiagram />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Kill Chain */}
        <Card>
          <CardHeader>
            <CardTitle>Analyse Kill Chain</CardTitle>
            <CardDescription>
              Couverture de détection par phase d'attaque
            </CardDescription>
          </CardHeader>
          <CardContent>
            <KillChainAnalysis />
          </CardContent>
        </Card>

        {/* MITRE ATT&CK */}
        <Card>
          <CardHeader>
            <CardTitle>Couverture MITRE ATT&CK for ICS</CardTitle>
            <CardDescription>
              Visibilité sur les techniques d'attaque industrielles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MitreAttackCoverage />
          </CardContent>
        </Card>
      </div>

      {/* Recommandations d'amélioration */}
      <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
            <Target className="h-5 w-5" />
            Recommandations d'Architecture
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Priorités Immédiates</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Déploiement DMZ industrielle sécurisée</li>
                <li>• Segmentation réseau IT/OT physique</li>
                <li>• SIEM industriel centralisé</li>
                <li>• Monitoring temps réel protocoles OT</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Objectifs Long Terme</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Zero Trust Architecture complète</li>
                <li>• Threat intelligence automatisée</li>
                <li>• Réponse autonome aux incidents</li>
                <li>• Cyber range industriel national</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}