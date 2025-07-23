import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ChartsSection } from "@/components/Charts";
import { ThreatActorsSection } from "@/components/ThreatActors";
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Target, 
  Globe, 
  Calendar, 
  FileText,
  Database,
  Zap,
  Lock,
  Eye,
  BarChart3,
  Map,
  Clock,
  DollarSign,
  Skull,
  LineChart
} from "lucide-react";

// Dashboard principal avec métriques clés
function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Alerte critique */}
      <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <CardTitle className="text-red-800 dark:text-red-200">SITUATION CRITIQUE CONFIRMÉE</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-red-700 dark:text-red-300">
            Le Royaume du Maroc fait face à une menace cybersécuritaire industrielle de niveau CRITIQUE avec un taux 
            de compromission des systèmes ICS atteignant <strong>42.5%</strong> en 2025, plaçant le royaume dans le 
            <strong> Top 3 mondial</strong> des pays les plus exposés aux cyberattaques industrielles.
          </p>
        </CardContent>
      </Card>

      {/* Métriques principales */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incidents Documentés</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">47</div>
            <p className="text-xs text-muted-foreground">2017-2025</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs Affectés</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">4.955M</div>
            <p className="text-xs text-muted-foreground">Cumulés</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pertes Économiques</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">$244M</div>
            <p className="text-xs text-muted-foreground">USD Estimées</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Augmentation</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">+650%</div>
            <p className="text-xs text-muted-foreground">Depuis 2017</p>
          </CardContent>
        </Card>
      </div>

      {/* Taux de compromission par secteur */}
      <Card>
        <CardHeader>
          <CardTitle>Analyse Sectorielle - Niveau de Risque</CardTitle>
          <CardDescription>Vulnérabilités et incidents par secteur industriel</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-sm">
                <span>Banking/Financial</span>
                <span className="font-medium text-red-600">95/100 - CRITIQUE</span>
              </div>
              <Progress value={95} className="h-2 mt-1" />
              <p className="text-xs text-muted-foreground mt-1">8 incidents • 25 entreprises • $500M risque</p>
            </div>
            
            <div>
              <div className="flex items-center justify-between text-sm">
                <span>Manufacturing</span>
                <span className="font-medium text-orange-600">85/100 - ÉLEVÉ</span>
              </div>
              <Progress value={85} className="h-2 mt-1" />
              <p className="text-xs text-muted-foreground mt-1">12 incidents • 45 entreprises • $200M risque</p>
            </div>
            
            <div>
              <div className="flex items-center justify-between text-sm">
                <span>Energy/Utilities</span>
                <span className="font-medium text-orange-600">80/100 - ÉLEVÉ</span>
              </div>
              <Progress value={80} className="h-2 mt-1" />
              <p className="text-xs text-muted-foreground mt-1">4 incidents • 15 entreprises • $100M risque</p>
            </div>
            
            <div>
              <div className="flex items-center justify-between text-sm">
                <span>Government Services</span>
                <span className="font-medium text-yellow-600">75/100 - MOYEN</span>
              </div>
              <Progress value={75} className="h-2 mt-1" />
              <p className="text-xs text-muted-foreground mt-1">6 incidents • 20 entreprises • $50M risque</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Timeline des incidents majeurs
function IncidentsTimeline() {
  const incidents = [
    {
      date: "8 Avril 2025",
      title: "CNSS Mass Data Breach",
      severity: "CRITIQUE",
      actor: "Jabaroot DZ (Algeria-linked)",
      impact: "2M citoyens, 500K+ entreprises, 54K fichiers",
      description: "Plus grand incident de l'histoire cybersécuritaire marocaine"
    },
    {
      date: "2024-2025",
      title: "Tawtik.ma Platform Compromise",
      severity: "ÉLEVÉE",
      actor: "Non divulgué",
      impact: "Documents notariaux sensibles compromis",
      description: "Plateforme notariale nationale compromised"
    },
    {
      date: "H1 2024",
      title: "Manufacturing ICS Critical Threat",
      severity: "CRITIQUE",
      actor: "Malware industriel spécialisé",
      impact: "40.39% des systèmes ICS ciblés",
      description: "Top 3 mondial pour le ciblage manufacturier"
    },
    {
      date: "2023",
      title: "Banking Sector Primary Target",
      severity: "ÉLEVÉE",
      actor: "Groupes multiples",
      impact: "Secteur confirmé comme cible prioritaire",
      description: "Phishing sophistiqué, ransomware, extorsion"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {incidents.map((incident, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{incident.title}</CardTitle>
                  <CardDescription className="mt-1">{incident.date}</CardDescription>
                </div>
                <Badge 
                  variant={incident.severity === "CRITIQUE" ? "destructive" : "secondary"}
                  className={incident.severity === "CRITIQUE" ? "" : "bg-orange-100 text-orange-800"}
                >
                  {incident.severity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm"><strong>Acteur :</strong> {incident.actor}</p>
                <p className="text-sm"><strong>Impact :</strong> {incident.impact}</p>
                <p className="text-sm text-muted-foreground">{incident.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Analyse OSINT
function OSINTAnalysis() {
  const sources = [
    { name: "DGSSI Morocco", type: "Gouvernemental", fiabilite: "Très élevée", acces: "Public limité" },
    { name: "maCERT", type: "CERT National", fiabilite: "Élevée", acces: "Public/privé" },
    { name: "Kaspersky ICS CERT", type: "Commercial", fiabilite: "Très élevée", acces: "Commercial" },
    { name: "IBM X-Force", type: "Commercial", fiabilite: "Élevée", acces: "Commercial" },
    { name: "PwC Morocco", type: "Consulting", fiabilite: "Élevée", acces: "Études publiques" },
    { name: "Hespress.com", type: "Média", fiabilite: "Moyenne", acces: "Public" },
    { name: "Medium Experts", type: "Analyse", fiabilite: "Moyenne", acces: "Public" }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Méthodologie OSINT Appliquée</CardTitle>
          <CardDescription>Sources et techniques de collecte d'intelligence</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Approche Multi-Sources</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Recherche linguistique: FR/EN/AR</li>
                <li>• Validation croisée minimale</li>
                <li>• Analyse temporelle 2015-2025</li>
                <li>• Corrélation géographique</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Techniques de Collecte</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Web scraping gouvernemental</li>
                <li>• Social media monitoring</li>
                <li>• Document analysis (PDFs)</li>
                <li>• Database querying CVE/Intel</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Limitations Identifiées</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 90% sous-déclaration incidents</li>
                <li>• Sources classifiées inaccessibles</li>
                <li>• Données forensics limitées</li>
                <li>• Évolution rapide menaces</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sources OSINT Primaires</CardTitle>
          <CardDescription>Évaluation de la fiabilité et de l'accessibilité</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sources.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{source.name}</div>
                  <div className="text-sm text-muted-foreground">{source.type}</div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="mb-1">{source.fiabilite}</Badge>
                  <div className="text-xs text-muted-foreground">{source.acces}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Recommandations stratégiques
function Recommendations() {
  const urgentActions = [
    {
      title: "Audit de Sécurité ICS Complet",
      timeline: "0-6 mois",
      priority: "CRITIQUE",
      description: "Inventaire exhaustif et assessment selon ISA/IEC 62443"
    },
    {
      title: "Segmentation Réseau IT/OT",
      timeline: "0-6 mois", 
      priority: "CRITIQUE",
      description: "Isolation physique des réseaux industriels critiques"
    },
    {
      title: "Formation Anti-Phishing Massive",
      timeline: "0-6 mois",
      priority: "ÉLEVÉE",
      description: "Campagne nationale 100% personnel industriel"
    },
    {
      title: "SOC Industriel National",
      timeline: "6-18 mois",
      priority: "ÉLEVÉE",
      description: "Centre de supervision 24/7 spécialisé systèmes industriels"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Actions Urgentes (0-6 mois)</CardTitle>
          <CardDescription>Mesures immédiates pour réduire l'exposition critique</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {urgentActions.filter(action => action.timeline === "0-6 mois").map((action, index) => (
              <div key={index} className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{action.title}</h4>
                  <Badge variant={action.priority === "CRITIQUE" ? "destructive" : "secondary"}>
                    {action.priority}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{action.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Renforcement Structurel (6-18 mois)</CardTitle>
          <CardDescription>Développement des capacités nationales</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {urgentActions.filter(action => action.timeline === "6-18 mois").map((action, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{action.title}</h4>
                  <Badge variant="secondary">{action.priority}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{action.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
        <CardHeader>
          <CardTitle className="text-amber-800 dark:text-amber-200">Avertissement Final</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            Ce rapport représente l'état des connaissances publiques disponibles. La situation réelle de la cybersécurité 
            industrielle au Maroc est très probablement <strong>significativement plus préoccupante</strong> que ce qui est 
            documenté publiquement. Une action immédiate, coordonnée et substantielle est requise pour protéger les 
            infrastructures critiques nationales.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-red-500" />
              <div>
                <h1 className="text-xl font-bold text-white">Cybersécurité Industrielle Maroc</h1>
                <p className="text-sm text-slate-400">Analyse OSINT 2015-2025</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="destructive" className="animate-pulse">
                <Skull className="h-3 w-3 mr-1" />
                NIVEAU CRITIQUE
              </Badge>
              <Badge variant="outline" className="text-slate-300 border-slate-600">
                <Eye className="h-3 w-3 mr-1" />
                OSINT
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation et contenu */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-slate-700">
              <BarChart3 className="h-4 w-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="charts" className="data-[state=active]:bg-slate-700">
              <LineChart className="h-4 w-4 mr-2" />
              Graphiques
            </TabsTrigger>
            <TabsTrigger value="threats" className="data-[state=active]:bg-slate-700">
              <Skull className="h-4 w-4 mr-2" />
              Acteurs
            </TabsTrigger>
            <TabsTrigger value="incidents" className="data-[state=active]:bg-slate-700">
              <Clock className="h-4 w-4 mr-2" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="osint" className="data-[state=active]:bg-slate-700">
              <Database className="h-4 w-4 mr-2" />
              OSINT
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="data-[state=active]:bg-slate-700">
              <Target className="h-4 w-4 mr-2" />
              Recommandations
            </TabsTrigger>
          </TabsList>

          <div className="text-white">
            <TabsContent value="dashboard" className="space-y-6">
              <Dashboard />
            </TabsContent>

            <TabsContent value="charts" className="space-y-6">
              <ChartsSection />
            </TabsContent>

            <TabsContent value="threats" className="space-y-6">
              <ThreatActorsSection />
            </TabsContent>

            <TabsContent value="incidents" className="space-y-6">
              <IncidentsTimeline />
            </TabsContent>

            <TabsContent value="osint" className="space-y-6">
              <OSINTAnalysis />
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-6">
              <Recommendations />
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <div>
              <p>Classification: Open Source Intelligence (OSINT) | Période: 2015-2025</p>
              <p className="mt-1">Sources: DGSSI, maCERT, Kaspersky, PwC, INTERPOL, IBM X-Force</p>
            </div>
            <div className="text-right">
              <p>Date de publication: Juillet 2025</p>
              <p className="mt-1">Prochaine révision recommandée: 12 mois</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
