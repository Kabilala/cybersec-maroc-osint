import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  TimeScale,
  ArcElement,
} from 'chart.js';
import { Radar, Scatter, PolarArea } from 'react-chartjs-2';
import { 
  ComposedChart, 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Sankey,
  Treemap,
  FunnelChart,
  Funnel,
  LabelList
} from 'recharts';
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
  DollarSign
} from "lucide-react";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  TimeScale,
  ArcElement
);

// Radar Chart pour l'analyse des capacités de cybersécurité par secteur
export function CyberCapabilitiesRadar() {
  const data = {
    labels: [
      'Détection',
      'Prévention', 
      'Réponse',
      'Récupération',
      'Gouvernance',
      'Formation'
    ],
    datasets: [
      {
        label: 'Banking/Financial',
        data: [75, 85, 70, 60, 90, 65],
        backgroundColor: 'rgba(220, 38, 38, 0.2)',
        borderColor: 'rgba(220, 38, 38, 1)',
        pointBackgroundColor: 'rgba(220, 38, 38, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(220, 38, 38, 1)'
      },
      {
        label: 'Manufacturing',
        data: [45, 50, 40, 35, 55, 30],
        backgroundColor: 'rgba(234, 88, 12, 0.2)',
        borderColor: 'rgba(234, 88, 12, 1)',
        pointBackgroundColor: 'rgba(234, 88, 12, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(234, 88, 12, 1)'
      },
      {
        label: 'Energy/Utilities',
        data: [55, 60, 50, 45, 70, 40],
        backgroundColor: 'rgba(217, 119, 6, 0.2)',
        borderColor: 'rgba(217, 119, 6, 1)',
        pointBackgroundColor: 'rgba(217, 119, 6, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(217, 119, 6, 1)'
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Maturité Cybersécurité par Secteur',
        color: '#e2e8f0'
      },
      legend: {
        labels: {
          color: '#e2e8f0'
        }
      }
    },
    scales: {
      r: {
        angleLines: {
          color: '#374151'
        },
        grid: {
          color: '#374151'
        },
        pointLabels: {
          color: '#94a3b8'
        },
        ticks: {
          color: '#94a3b8',
          stepSize: 20
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  return <Radar data={data} options={options} />;
}

// Matrice des vulnérabilités critiques
export function VulnerabilityMatrix() {
  const vulnerabilities = [
    { name: 'Protocoles non chiffrés', probabilite: 95, impact: 90, criticite: 'CRITIQUE' },
    { name: 'Segmentation IT/OT', probabilite: 85, impact: 95, criticite: 'CRITIQUE' },
    { name: 'Firmware obsolète', probabilite: 90, impact: 70, criticite: 'ÉLEVÉE' },
    { name: 'Formation personnel', probabilite: 80, impact: 75, criticite: 'ÉLEVÉE' },
    { name: 'Monitoring insuffisant', probabilite: 60, impact: 65, criticite: 'MOYENNE' },
    { name: 'Backup inadéquat', probabilite: 70, impact: 80, criticite: 'ÉLEVÉE' },
    { name: 'Accès privilégiés', probabilite: 85, impact: 85, criticite: 'CRITIQUE' },
  ];

  const data = {
    datasets: [
      {
        label: 'Vulnérabilités Critiques',
        data: vulnerabilities.map(v => ({
          x: v.probabilite,
          y: v.impact,
          name: v.name,
          criticite: v.criticite
        })),
        backgroundColor: vulnerabilities.map(v => 
          v.criticite === 'CRITIQUE' ? 'rgba(220, 38, 38, 0.7)' :
          v.criticite === 'ÉLEVÉE' ? 'rgba(234, 88, 12, 0.7)' :
          'rgba(202, 138, 4, 0.7)'
        ),
        borderColor: '#1f2937',
        borderWidth: 2,
        pointRadius: 8,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Matrice Probabilité vs Impact des Vulnérabilités',
        color: '#e2e8f0'
      },
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const point = context.parsed;
            const data = context.raw;
            return `${data.name}: P${point.x}% | I${point.y}% | ${data.criticite}`;
          }
        }
      }
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Probabilité (%)',
          color: '#e2e8f0'
        },
        min: 0,
        max: 100,
        ticks: {
          color: '#94a3b8'
        },
        grid: {
          color: '#374151'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Impact (%)',
          color: '#e2e8f0'
        },
        min: 0,
        max: 100,
        ticks: {
          color: '#94a3b8'
        },
        grid: {
          color: '#374151'
        }
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="h-96">
        <Scatter data={data} options={options} />
      </div>
      <div className="grid grid-cols-3 gap-2 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-600 rounded"></div>
          <span>Critique</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-600 rounded"></div>
          <span>Élevée</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-600 rounded"></div>
          <span>Moyenne</span>
        </div>
      </div>
    </div>
  );
}

// Timeline interactive détaillée
export function DetailedTimeline() {
  const timelineData = [
    { year: 2017, incidents: 2, severity: 'LOW', notable: 'Premiers incidents documentés' },
    { year: 2018, incidents: 3, severity: 'LOW', notable: 'Émergence phishing ciblé' },
    { year: 2019, incidents: 2, severity: 'LOW', notable: 'Stabilisation relative' },
    { year: 2020, incidents: 4, severity: 'MEDIUM', notable: 'COVID-19 : Explosion télétravail' },
    { year: 2021, incidents: 5, severity: 'MEDIUM', notable: 'Première vague ransomware' },
    { year: 2022, incidents: 6, severity: 'MEDIUM', notable: 'Professionnalisation cybercrime' },
    { year: 2023, incidents: 8, severity: 'HIGH', notable: 'Banking sector ciblage prioritaire' },
    { year: 2024, incidents: 12, severity: 'CRITICAL', notable: 'ICS breakthrough 40%' },
    { year: 2025, incidents: 15, severity: 'CRITICAL', notable: 'CNSS breach historique' },
  ];

  const COLORS = {
    'LOW': '#10b981',
    'MEDIUM': '#f59e0b', 
    'HIGH': '#f97316',
    'CRITICAL': '#ef4444'
  };

  return (
    <div className="space-y-6">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="year" 
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8' }}
            />
            <YAxis 
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#e2e8f0'
              }}
              formatter={(value, name) => [value, 'Incidents']}
              labelFormatter={(year) => `Année ${year}`}
            />
            <Bar 
              dataKey="incidents" 
              fill={(entry: any) => COLORS[entry.severity] || '#94a3b8'}
              radius={[4, 4, 0, 0]}
            />
            <Line 
              type="monotone" 
              dataKey="incidents" 
              stroke="#ef4444" 
              strokeWidth={3}
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Timeline annotations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {timelineData.filter(d => d.severity === 'CRITICAL' || d.year === 2020).map((event, index) => (
          <Card key={index} className={`border-l-4 ${
            event.severity === 'CRITICAL' ? 'border-l-red-500' : 'border-l-orange-500'
          }`}>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-lg">{event.year}</span>
                <Badge variant={event.severity === 'CRITICAL' ? 'destructive' : 'secondary'}>
                  {event.incidents} incidents
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{event.notable}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Analyse géographique des menaces
export function ThreatGeography() {
  const threatOrigins = [
    { region: 'Algérie', threats: 45, type: 'État-nation', risk: 'CRITIQUE' },
    { region: 'Maroc (interne)', threats: 25, type: 'Cybercriminalité', risk: 'ÉLEVÉ' },
    { region: 'Moyen-Orient', threats: 15, type: 'APT', risk: 'ÉLEVÉ' },
    { region: 'Europe', threats: 8, type: 'Ransomware', risk: 'MOYEN' },
    { region: 'Asie', threats: 7, type: 'Exploitation', risk: 'MOYEN' },
  ];

  return (
    <div className="space-y-6">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={threatOrigins}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="threats"
              nameKey="region"
              label={({ region, percent }) => `${region}: ${(percent * 100).toFixed(1)}%`}
            >
              {threatOrigins.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={
                    entry.risk === 'CRITIQUE' ? '#dc2626' :
                    entry.risk === 'ÉLEVÉ' ? '#ea580c' : '#ca8a04'
                  } 
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#e2e8f0'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {threatOrigins.map((threat, index) => (
          <Card key={index}>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{threat.region}</span>
                <Badge variant={
                  threat.risk === 'CRITIQUE' ? 'destructive' : 
                  threat.risk === 'ÉLEVÉ' ? 'secondary' : 'outline'
                }>
                  {threat.risk}
                </Badge>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Type: {threat.type}</p>
                <p>Menaces: {threat.threats}%</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Évolution des techniques d'attaque
export function AttackTechniquesEvolution() {
  const techniquesData = [
    { year: '2020', phishing: 60, malware: 25, ransomware: 10, apt: 5 },
    { year: '2021', phishing: 55, malware: 20, ransomware: 20, apt: 5 },
    { year: '2022', phishing: 50, malware: 18, ransomware: 25, apt: 7 },
    { year: '2023', phishing: 45, malware: 15, ransomware: 30, apt: 10 },
    { year: '2024', phishing: 40, malware: 12, ransomware: 35, apt: 13 },
    { year: '2025', phishing: 35, malware: 10, ransomware: 40, apt: 15 },
  ];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={techniquesData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="year" 
            stroke="#94a3b8"
            tick={{ fill: '#94a3b8' }}
          />
          <YAxis 
            stroke="#94a3b8"
            tick={{ fill: '#94a3b8' }}
            label={{ value: 'Pourcentage (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#94a3b8' } }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#e2e8f0'
            }}
          />
          <Bar dataKey="phishing" stackId="a" fill="#3b82f6" name="Phishing" />
          <Bar dataKey="malware" stackId="a" fill="#10b981" name="Malware" />
          <Bar dataKey="ransomware" stackId="a" fill="#ef4444" name="Ransomware" />
          <Bar dataKey="apt" stackId="a" fill="#8b5cf6" name="APT" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

// Métriques de performance cybersécurité
export function CyberMetrics() {
  const metrics = [
    { 
      title: 'Temps de Détection Moyen', 
      value: '180', 
      unit: 'jours', 
      trend: 'up', 
      bad: true,
      description: 'Augmentation de 25% vs 2023'
    },
    { 
      title: 'Taux de Récupération', 
      value: '60', 
      unit: '%', 
      trend: 'down', 
      bad: true,
      description: 'Diminution de 15% vs 2023'
    },
    { 
      title: 'Coût Moyen Incident', 
      value: '500K', 
      unit: 'USD', 
      trend: 'up', 
      bad: true,
      description: 'Augmentation de 40% vs 2023'
    },
    { 
      title: 'Incidents ICS', 
      value: '42.5', 
      unit: '%', 
      trend: 'up', 
      bad: true,
      description: 'Taux compromission systèmes'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className={`${metric.bad ? 'border-red-200 bg-red-50/10' : 'border-green-200 bg-green-50/10'}`}>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                <div className="flex items-baseline mt-1">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <span className="text-sm text-muted-foreground ml-1">{metric.unit}</span>
                </div>
              </div>
              <div className={`p-2 rounded-full ${
                metric.bad ? 'bg-red-100 dark:bg-red-900/20' : 'bg-green-100 dark:bg-green-900/20'
              }`}>
                {metric.trend === 'up' ? (
                  <TrendingUp className={`h-4 w-4 ${metric.bad ? 'text-red-600' : 'text-green-600'}`} />
                ) : (
                  <TrendingUp className={`h-4 w-4 rotate-180 ${metric.bad ? 'text-red-600' : 'text-green-600'}`} />
                )}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{metric.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Composant principal des graphiques avancés
export function AdvancedChartsSection() {
  return (
    <div className="space-y-6">
      {/* Métriques de performance */}
      <Card>
        <CardHeader>
          <CardTitle>Métriques de Performance Cybersécurité</CardTitle>
          <CardDescription>Indicateurs clés de performance 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <CyberMetrics />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Radar des capacités */}
        <Card>
          <CardHeader>
            <CardTitle>Maturité Cybersécurité par Secteur</CardTitle>
            <CardDescription>
              Évaluation des capacités de cybersécurité selon le framework NIST
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <CyberCapabilitiesRadar />
            </div>
          </CardContent>
        </Card>

        {/* Matrice des vulnérabilités */}
        <Card>
          <CardHeader>
            <CardTitle>Matrice des Vulnérabilités Critiques</CardTitle>
            <CardDescription>
              Probabilité vs Impact des principales vulnérabilités identifiées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <VulnerabilityMatrix />
          </CardContent>
        </Card>
      </div>

      {/* Timeline détaillée */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Timeline Détaillée des Incidents</CardTitle>
          <CardDescription>
            Évolution chronologique avec points d'inflexion critiques
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DetailedTimeline />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Géographie des menaces */}
        <Card>
          <CardHeader>
            <CardTitle>Origine Géographique des Menaces</CardTitle>
            <CardDescription>
              Répartition des cyberattaques par région d'origine
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ThreatGeography />
          </CardContent>
        </Card>

        {/* Évolution des techniques */}
        <Card>
          <CardHeader>
            <CardTitle>Évolution des Techniques d'Attaque</CardTitle>
            <CardDescription>
              Tendances dans les méthodes utilisées par les cybercriminels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AttackTechniquesEvolution />
          </CardContent>
        </Card>
      </div>

      {/* Insights et recommandations */}
      <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
        <CardHeader>
          <CardTitle className="text-red-800 dark:text-red-200 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Insights Critiques des Données
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">Tendances Alarmantes</h4>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• Sophistication croissante des APT</li>
                <li>• Ciblage spécifique des systèmes ICS</li>
                <li>• Professionnalisation du cybercrime</li>
                <li>• Géopolitisation des cyberattaques</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">Vulnérabilités Structurelles</h4>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• Infrastructure legacy non sécurisée</li>
                <li>• Convergence IT/OT mal maîtrisée</li>
                <li>• Manque de visibilité réseau OT</li>
                <li>• Formation personnel insuffisante</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}