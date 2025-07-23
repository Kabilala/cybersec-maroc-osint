import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export function EvolutionTemporelleChart() {
  const data = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Incidents Majeurs',
        data: [2, 3, 2, 4, 5, 6, 8, 12, 15],
        borderColor: '#ef4444',
        backgroundColor: '#ef444480',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Utilisateurs Affectés (millions)',
        data: [0.05, 0.075, 0.06, 0.12, 0.2, 0.35, 0.8, 1.2, 2.5],
        borderColor: '#f97316',
        backgroundColor: '#f9731680',
        tension: 0.4,
        yAxisID: 'y1',
      }
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: 'Évolution des Incidents de Cybersécurité (2017-2025)',
        color: '#e2e8f0'
      },
      legend: {
        labels: {
          color: '#e2e8f0'
        }
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Année',
          color: '#e2e8f0'
        },
        ticks: {
          color: '#94a3b8'
        },
        grid: {
          color: '#374151'
        }
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Nombre d\'Incidents',
          color: '#e2e8f0'
        },
        ticks: {
          color: '#94a3b8'
        },
        grid: {
          color: '#374151'
        }
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Utilisateurs Affectés (M)',
          color: '#e2e8f0'
        },
        ticks: {
          color: '#94a3b8'
        },
        grid: {
          drawOnChartArea: false,
          color: '#374151'
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export function SecteurVulnerabiliteChart() {
  const data = {
    labels: ['Banking/Financial', 'Manufacturing', 'Energy/Utilities', 'Government', 'Water/Sanitation', 'Telecom', 'Transport'],
    datasets: [
      {
        label: 'Score de Vulnérabilité (/100)',
        data: [95, 85, 80, 75, 70, 65, 60],
        backgroundColor: [
          '#dc2626', // Rouge - Banking
          '#ea580c', // Orange foncé - Manufacturing
          '#d97706', // Orange - Energy
          '#ca8a04', // Jaune foncé - Government
          '#65a30d', // Vert olive - Water
          '#059669', // Vert - Telecom
          '#0891b2', // Bleu - Transport
        ],
        borderColor: '#1f2937',
        borderWidth: 2,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Vulnérabilités par Secteur Industriel',
        color: '#e2e8f0'
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#94a3b8'
        },
        grid: {
          color: '#374151'
        }
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Score de Vulnérabilité',
          color: '#e2e8f0'
        },
        ticks: {
          color: '#94a3b8'
        },
        grid: {
          color: '#374151'
        }
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export function VecteursAttaqueChart() {
  const data = {
    labels: [
      'Phishing/Social Engineering',
      'ICS/SCADA Vulnerabilities', 
      'Remote Access Exploitation',
      'USB/Removable Media',
      'Supply Chain Compromise'
    ],
    datasets: [
      {
        data: [35, 25, 20, 10, 10],
        backgroundColor: [
          '#dc2626',
          '#ea580c', 
          '#d97706',
          '#ca8a04',
          '#059669'
        ],
        borderColor: '#1f2937',
        borderWidth: 2,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Distribution des Vecteurs d\'Attaque (%)',
        color: '#e2e8f0'
      },
      legend: {
        position: 'right' as const,
        labels: {
          color: '#e2e8f0',
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12
          }
        }
      }
    },
  };

  return <Doughnut data={data} options={options} />;
}

export function ImpactEconomiqueChart() {
  const data = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Impact Économique (Millions USD)',
        data: [5, 8, 6, 12, 18, 25, 40, 55, 75],
        backgroundColor: '#dc2626',
        borderColor: '#991b1b',
        borderWidth: 2,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Impact Économique Annuel des Cyberattaques',
        color: '#e2e8f0'
      },
      legend: {
        labels: {
          color: '#e2e8f0'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#94a3b8'
        },
        grid: {
          color: '#374151'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Millions USD',
          color: '#e2e8f0'
        },
        ticks: {
          color: '#94a3b8'
        },
        grid: {
          color: '#374151'
        }
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export function ChartsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card className="col-span-1 xl:col-span-2">
          <CardHeader>
            <CardTitle>Évolution Temporelle des Menaces</CardTitle>
            <CardDescription>
              Croissance exponentielle des incidents et utilisateurs affectés (2017-2025)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <EvolutionTemporelleChart />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analyse Sectorielle</CardTitle>
            <CardDescription>
              Niveaux de vulnérabilité par secteur industriel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <SecteurVulnerabiliteChart />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vecteurs d'Attaque</CardTitle>
            <CardDescription>
              Distribution des méthodes d'intrusion observées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <VecteursAttaqueChart />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 xl:col-span-2">
          <CardHeader>
            <CardTitle>Impact Économique</CardTitle>
            <CardDescription>
              Évolution des pertes financières estimées par année
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ImpactEconomiqueChart />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analyse des tendances */}
      <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
        <CardHeader>
          <CardTitle className="text-amber-800 dark:text-amber-200">Points d'Inflexion Critiques</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-amber-800 dark:text-amber-200">2020 : Accélération COVID-19</h4>
              <ul className="text-sm text-amber-700 dark:text-amber-300 mt-2 space-y-1">
                <li>• Doublement des incidents : 2 → 4</li>
                <li>• Télétravail généralisé</li>
                <li>• Premier pic ransomware (5 incidents)</li>
                <li>• Digitalisation forcée non sécurisée</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-amber-800 dark:text-amber-200">2023-2025 : Escalade Critique</h4>
              <ul className="text-sm text-amber-700 dark:text-amber-300 mt-2 space-y-1">
                <li>• Banking sector ciblage prioritaire</li>
                <li>• ICS breakthrough : &gt;40% compromis</li>
                <li>• APT groups, malware spécialisé</li>
                <li>• Impact massif : 2M+ utilisateurs</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}