import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Skull, 
  MapPin, 
  Target, 
  Calendar, 
  AlertTriangle,
  Users,
  Shield,
  Sword
} from "lucide-react";

interface ThreatActor {
  name: string;
  origin: string;
  category: string;
  firstSeen: string;
  targets: string[];
  capability: string;
  motivation: string;
  ttps: string[];
  attribution: string;
  impact: string;
}

const threatActors: ThreatActor[] = [
  {
    name: "Jabaroot DZ",
    origin: "Algérie",
    category: "Hacktivist / State-Sponsored",
    firstSeen: "Avril 2025",
    targets: ["CNSS", "Tawtik.ma", "ANCFCC", "Ministères"],
    capability: "Élevée",
    motivation: "Géopolitique / Anti-Maroc",
    ttps: ["Zero-day exploitation", "Data exfiltration", "Social engineering", "Oracle exploitation"],
    attribution: "Confirmée",
    impact: "Critique - 2M+ citoyens affectés"
  },
  {
    name: "Phantom Atlas",
    origin: "Maroc",
    category: "Hacktivist / Retaliation",
    firstSeen: "Juin 2025",
    targets: ["Algérie Télécom", "Infrastructures algériennes"],
    capability: "Élevée",
    motivation: "Représailles cyber",
    ttps: ["Network infiltration", "Infrastructure mapping", "OSINT gathering"],
    attribution: "Suspectée",
    impact: "Moyen - Guerre cyber régionale"
  },
  {
    name: "Banking Trojan Groups",
    origin: "International",
    category: "Cybercriminel financier",
    firstSeen: "2022",
    targets: ["Secteur bancaire marocain", "Institutions financières"],
    capability: "Élevée",
    motivation: "Financière",
    ttps: ["Banking trojans", "Phishing campaigns", "Man-in-the-browser", "Credential theft"],
    attribution: "Partiellement identifiée",
    impact: "Élevé - $500M USD à risque"
  },
  {
    name: "ICS-focused APT",
    origin: "Non attribué",
    category: "Advanced Persistent Threat",
    firstSeen: "2023",
    targets: ["Secteur manufacturier", "Infrastructures industrielles"],
    capability: "Très élevée",
    motivation: "Espionnage industriel",
    ttps: ["ICS malware", "SCADA exploitation", "Air-gap jumping", "Supply chain attacks"],
    attribution: "Non confirmée",
    impact: "Critique - 40.39% systèmes ICS ciblés"
  }
];

const regionalThreats = [
  {
    country: "Algérie",
    groups: ["Jabaroot DZ"],
    threatLevel: "Critique",
    incidents: 4,
    description: "Principal acteur hostile identifié, campagnes sophistiquées"
  },
  {
    country: "Libye",
    groups: ["Groupes criminels"],
    threatLevel: "Élevé",
    incidents: 2,
    description: "Activités criminelles opportunistes, ransomware"
  },
  {
    country: "International",
    groups: ["APT non attribués", "Groupes criminels"],
    threatLevel: "Élevé",
    incidents: 8,
    description: "Menaces globales ciblant spécifiquement le Maroc"
  }
];

function ThreatActorCard({ actor }: { actor: ThreatActor }) {
  const getCapabilityColor = (capability: string) => {
    switch (capability.toLowerCase()) {
      case 'très élevée': return 'destructive';
      case 'élevée': return 'secondary';
      case 'moyenne': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Card className="border-slate-700">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Skull className="h-5 w-5 text-red-500" />
              {actor.name}
            </CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <MapPin className="h-3 w-3" />
              {actor.origin} • {actor.category}
            </CardDescription>
          </div>
          <Badge variant={getCapabilityColor(actor.capability)}>
            {actor.capability} Capability
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Première détection:</span>
            <p className="text-muted-foreground">{actor.firstSeen}</p>
          </div>
          <div>
            <span className="font-medium">Attribution:</span>
            <p className="text-muted-foreground">{actor.attribution}</p>
          </div>
        </div>

        <div>
          <span className="font-medium text-sm">Motivation:</span>
          <p className="text-sm text-muted-foreground mt-1">{actor.motivation}</p>
        </div>

        <div>
          <span className="font-medium text-sm">Cibles principales:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {actor.targets.map((target, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {target}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <span className="font-medium text-sm">TTPs observées:</span>
          <ul className="text-xs text-muted-foreground mt-1 space-y-1">
            {actor.ttps.map((ttp, index) => (
              <li key={index}>• {ttp}</li>
            ))}
          </ul>
        </div>

        <div className="pt-2 border-t border-slate-700">
          <span className="font-medium text-sm">Impact:</span>
          <p className="text-sm text-muted-foreground mt-1">{actor.impact}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function RegionalThreatMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Cartographie des Menaces Régionales
        </CardTitle>
        <CardDescription>
          Distribution géographique des acteurs malveillants ciblant le Maroc
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {regionalThreats.map((threat, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-slate-700 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div>
                  <div className="font-medium">{threat.country}</div>
                  <div className="text-sm text-muted-foreground">{threat.description}</div>
                </div>
              </div>
              <div className="text-right">
                <Badge 
                  variant={threat.threatLevel === 'Critique' ? 'destructive' : 'secondary'}
                  className="mb-1"
                >
                  {threat.threatLevel}
                </Badge>
                <div className="text-xs text-muted-foreground">{threat.incidents} incidents</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function CyberWarfareTimeline() {
  const events = [
    {
      date: "Avril 2025",
      title: "Début de la Guerre Cyber Maroc-Algérie",
      description: "Jabaroot DZ lance l'attaque massive contre CNSS",
      impact: "Critique"
    },
    {
      date: "Mai 2025",
      title: "Escalade avec Tawtik.ma",
      description: "Compromission de la plateforme notariale nationale",
      impact: "Élevé"
    },
    {
      date: "Juin 2025",
      title: "Représailles Phantom Atlas",
      description: "Contre-attaque marocaine sur Algérie Télécom",
      impact: "Élevé"
    },
    {
      date: "Juillet 2025",
      title: "Situation actuelle",
      description: "Conflit cyber actif, menace d'escalade régionale",
      impact: "Critique"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sword className="h-5 w-5" />
          Timeline du Conflit Cyber Régional
        </CardTitle>
        <CardDescription>
          Évolution de la guerre cybernétique Maroc-Algérie (2025)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-red-500 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">{event.title}</div>
                    <Badge 
                      variant={event.impact === 'Critique' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {event.impact}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{event.date}</div>
                  <div className="text-sm mt-2">{event.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ThreatActorsSection() {
  return (
    <div className="space-y-6">
      {/* Alerte de guerre cyber */}
      <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <CardTitle className="text-red-800 dark:text-red-200">CONFLIT CYBER ACTIF</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-red-700 dark:text-red-300">
            Le Maroc est actuellement engagé dans un <strong>conflit cybernétique actif</strong> avec des groupes 
            Algeria-linked. Les attaques de <strong>Jabaroot DZ</strong> ont déclenché des représailles de 
            <strong> Phantom Atlas</strong>, créant une escalade cyber régionale sans précédent.
          </p>
        </CardContent>
      </Card>

      {/* Acteurs principaux */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Acteurs de Menaces Identifiés</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {threatActors.map((actor, index) => (
            <ThreatActorCard key={index} actor={actor} />
          ))}
        </div>
      </div>

      {/* Cartographie régionale et timeline */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RegionalThreatMap />
        <CyberWarfareTimeline />
      </div>

      {/* Statistiques des attaques */}
      <Card>
        <CardHeader>
          <CardTitle>Attribution et Capacités</CardTitle>
          <CardDescription>Analyse des groupes d'attaquants par sophistication</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">4</div>
              <div className="text-sm text-muted-foreground">Groupes Identifiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">75%</div>
              <div className="text-sm text-muted-foreground">Attribution Confirmée</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">2</div>
              <div className="text-sm text-muted-foreground">Conflits Cyber Actifs</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}