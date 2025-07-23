import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Activity, 
  AlertTriangle, 
  Shield, 
  Zap,
  Globe,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Wifi,
  WifiOff,
  Timer,
  Bell
} from "lucide-react";

interface ThreatAlert {
  id: string;
  timestamp: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  source: string;
  target?: string;
  status: 'active' | 'investigating' | 'resolved';
}

interface SecurityMetric {
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

const mockAlerts: ThreatAlert[] = [
  {
    id: '1',
    timestamp: '2025-07-23 14:32:15',
    severity: 'critical',
    title: 'Nouvelle campagne Jabaroot DZ détectée',
    description: 'Reconnaissance active sur les serveurs gouvernementaux marocains',
    source: 'OSINT Multiple',
    target: 'Secteur gouvernemental',
    status: 'active'
  },
  {
    id: '2',
    timestamp: '2025-07-23 13:45:22',
    severity: 'high',
    title: 'Pic d\'activité malware ICS',
    description: 'Augmentation de 25% des tentatives d\'infection sur systèmes industriels',
    source: 'Kaspersky ICS CERT',
    target: 'Secteur manufacturier',
    status: 'investigating'
  },
  {
    id: '3',
    timestamp: '2025-07-23 12:18:07',
    severity: 'medium',
    title: 'Nouvelle vulnérabilité SCADA publiée',
    description: 'CVE-2025-12345 affecte les systèmes Schneider Electric',
    source: 'NVD',
    target: 'Infrastructures énergétiques',
    status: 'active'
  }
];\n\nconst securityMetrics: SecurityMetric[] = [\n  { label: 'Tentatives d\\'intrusion', value: 2847, unit: '/h', trend: 'up', color: 'text-red-500' },\n  { label: 'Systèmes ICS monitirés', value: 1205, unit: '', trend: 'stable', color: 'text-blue-500' },\n  { label: 'Alertes critiques', value: 7, unit: '/24h', trend: 'up', color: 'text-red-500' },\n  { label: 'Temps de détection moyen', value: 47, unit: 'min', trend: 'down', color: 'text-green-500' },\n  { label: 'Couverture SIEM', value: 78, unit: '%', trend: 'up', color: 'text-blue-500' },\n  { label: 'Incidents en cours', value: 3, unit: '', trend: 'stable', color: 'text-orange-500' }\n];\n\nfunction ThreatAlertCard({ alert }: { alert: ThreatAlert }) {\n  const getSeverityColor = (severity: string) => {\n    switch (severity) {\n      case 'critical': return 'destructive';\n      case 'high': return 'secondary';\n      case 'medium': return 'outline';\n      case 'low': return 'outline';\n      default: return 'outline';\n    }\n  };\n\n  const getStatusColor = (status: string) => {\n    switch (status) {\n      case 'active': return 'text-red-500';\n      case 'investigating': return 'text-orange-500';\n      case 'resolved': return 'text-green-500';\n      default: return 'text-gray-500';\n    }\n  };\n\n  return (\n    <Card className=\"border-slate-700\">\n      <CardHeader className=\"pb-2\">\n        <div className=\"flex items-start justify-between\">\n          <div className=\"flex items-center gap-2\">\n            <AlertTriangle className=\"h-4 w-4 text-red-500\" />\n            <CardTitle className=\"text-sm\">{alert.title}</CardTitle>\n          </div>\n          <div className=\"flex items-center gap-2\">\n            <Badge variant={getSeverityColor(alert.severity)}>\n              {alert.severity.toUpperCase()}\n            </Badge>\n            <div className={`text-xs ${getStatusColor(alert.status)}`}>\n              {alert.status.toUpperCase()}\n            </div>\n          </div>\n        </div>\n      </CardHeader>\n      <CardContent className=\"space-y-2\">\n        <p className=\"text-sm text-muted-foreground\">{alert.description}</p>\n        <div className=\"flex items-center justify-between text-xs\">\n          <div className=\"flex items-center gap-4\">\n            <span><strong>Source:</strong> {alert.source}</span>\n            {alert.target && <span><strong>Cible:</strong> {alert.target}</span>}\n          </div>\n          <span className=\"text-muted-foreground\">{alert.timestamp}</span>\n        </div>\n      </CardContent>\n    </Card>\n  );\n}\n\nfunction SecurityMetricsGrid() {\n  const getTrendIcon = (trend: string) => {\n    switch (trend) {\n      case 'up': return <TrendingUp className=\"h-3 w-3\" />;\n      case 'down': return <TrendingDown className=\"h-3 w-3\" />;\n      default: return <Activity className=\"h-3 w-3\" />;\n    }\n  };\n\n  return (\n    <div className=\"grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4\">\n      {securityMetrics.map((metric, index) => (\n        <Card key={index} className=\"border-slate-700\">\n          <CardContent className=\"p-4\">\n            <div className=\"flex items-center justify-between\">\n              <div>\n                <div className={`text-lg font-bold ${metric.color}`}>\n                  {metric.value.toLocaleString()}{metric.unit}\n                </div>\n                <div className=\"text-xs text-muted-foreground\">{metric.label}</div>\n              </div>\n              <div className={metric.color}>\n                {getTrendIcon(metric.trend)}\n              </div>\n            </div>\n          </CardContent>\n        </Card>\n      ))}\n    </div>\n  );\n}\n\nfunction NetworkStatus() {\n  const [isConnected, setIsConnected] = useState(true);\n  const [lastUpdate, setLastUpdate] = useState(new Date());\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setLastUpdate(new Date());\n      // Simuler parfois une perte de connexion\n      if (Math.random() < 0.05) {\n        setIsConnected(false);\n        setTimeout(() => setIsConnected(true), 3000);\n      }\n    }, 5000);\n\n    return () => clearInterval(interval);\n  }, []);\n\n  return (\n    <Card className=\"border-slate-700\">\n      <CardHeader className=\"pb-3\">\n        <div className=\"flex items-center justify-between\">\n          <CardTitle className=\"text-lg flex items-center gap-2\">\n            <Activity className=\"h-5 w-5\" />\n            État du Réseau de Surveillance\n          </CardTitle>\n          <div className=\"flex items-center gap-2\">\n            {isConnected ? (\n              <Wifi className=\"h-4 w-4 text-green-500\" />\n            ) : (\n              <WifiOff className=\"h-4 w-4 text-red-500\" />\n            )}\n            <Badge variant={isConnected ? \"default\" : \"destructive\"}>\n              {isConnected ? \"CONNECTÉ\" : \"DÉCONNECTÉ\"}\n            </Badge>\n          </div>\n        </div>\n      </CardHeader>\n      <CardContent className=\"space-y-4\">\n        <div className=\"grid grid-cols-2 gap-4 text-sm\">\n          <div>\n            <span className=\"font-medium\">Sources OSINT actives:</span>\n            <p className=\"text-muted-foreground\">47/52 en ligne</p>\n          </div>\n          <div>\n            <span className=\"font-medium\">Dernière mise à jour:</span>\n            <p className=\"text-muted-foreground\">{lastUpdate.toLocaleTimeString()}</p>\n          </div>\n          <div>\n            <span className=\"font-medium\">Latence moyenne:</span>\n            <p className=\"text-muted-foreground\">142ms</p>\n          </div>\n          <div>\n            <span className=\"font-medium\">Débit données:</span>\n            <p className=\"text-muted-foreground\">2.4 MB/s</p>\n          </div>\n        </div>\n        \n        <Separator />\n        \n        <div className=\"space-y-2\">\n          <div className=\"flex items-center justify-between text-sm\">\n            <span>DGSSI Feed</span>\n            <div className=\"w-2 h-2 rounded-full bg-green-500\"></div>\n          </div>\n          <div className=\"flex items-center justify-between text-sm\">\n            <span>Kaspersky ICS CERT</span>\n            <div className=\"w-2 h-2 rounded-full bg-green-500\"></div>\n          </div>\n          <div className=\"flex items-center justify-between text-sm\">\n            <span>IBM X-Force</span>\n            <div className=\"w-2 h-2 rounded-full bg-green-500\"></div>\n          </div>\n          <div className=\"flex items-center justify-between text-sm\">\n            <span>Social Media Monitoring</span>\n            <div className=\"w-2 h-2 rounded-full bg-yellow-500\"></div>\n          </div>\n          <div className=\"flex items-center justify-between text-sm\">\n            <span>Dark Web Feeds</span>\n            <div className=\"w-2 h-2 rounded-full bg-red-500\"></div>\n          </div>\n        </div>\n      </CardContent>\n    </Card>\n  );\n}\n\nfunction ThreatLevelIndicator() {\n  const currentLevel = 'CRITICAL';\n  const levelColor = currentLevel === 'CRITICAL' ? 'text-red-500' : 'text-orange-500';\n  \n  return (\n    <Card className=\"border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20\">\n      <CardHeader className=\"pb-3\">\n        <div className=\"flex items-center justify-between\">\n          <CardTitle className=\"text-red-800 dark:text-red-200 flex items-center gap-2\">\n            <Shield className=\"h-5 w-5\" />\n            Niveau de Menace National\n          </CardTitle>\n          <Badge variant=\"destructive\" className=\"animate-pulse\">\n            <Bell className=\"h-3 w-3 mr-1\" />\n            {currentLevel}\n          </Badge>\n        </div>\n      </CardHeader>\n      <CardContent>\n        <div className=\"space-y-4\">\n          <div className=\"text-sm text-red-700 dark:text-red-300\">\n            <p><strong>Menace Active:</strong> Groupe Jabaroot DZ en activité continue</p>\n            <p><strong>Secteurs à Risque:</strong> Gouvernemental, Bancaire, Industriel</p>\n            <p><strong>Recommandation:</strong> Surveillance renforcée et mesures défensives actives</p>\n          </div>\n          \n          <div className=\"grid grid-cols-3 gap-4 text-center\">\n            <div>\n              <div className=\"text-2xl font-bold text-red-600\">47</div>\n              <div className=\"text-xs text-muted-foreground\">Incidents actifs</div>\n            </div>\n            <div>\n              <div className=\"text-2xl font-bold text-orange-600\">156</div>\n              <div className=\"text-xs text-muted-foreground\">Alertes 24h</div>\n            </div>\n            <div>\n              <div className=\"text-2xl font-bold text-red-600\">3</div>\n              <div className=\"text-xs text-muted-foreground\">Groupes hostiles</div>\n            </div>\n          </div>\n        </div>\n      </CardContent>\n    </Card>\n  );\n}\n\nexport function RealTimeMonitoringSection() {\n  const [refreshing, setRefreshing] = useState(false);\n  \n  const handleRefresh = () => {\n    setRefreshing(true);\n    setTimeout(() => setRefreshing(false), 2000);\n  };\n  \n  return (\n    <div className=\"space-y-6\">\n      {/* Header avec bouton refresh */}\n      <div className=\"flex items-center justify-between\">\n        <div>\n          <h2 className=\"text-2xl font-bold\">Surveillance Temps Réel</h2>\n          <p className=\"text-muted-foreground\">Monitoring continu des menaces cybersécuritaires</p>\n        </div>\n        <Button \n          onClick={handleRefresh} \n          disabled={refreshing}\n          variant=\"outline\"\n          className=\"border-slate-600\"\n        >\n          <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />\n          Actualiser\n        </Button>\n      </div>\n\n      {/* Niveau de menace et status réseau */}\n      <div className=\"grid grid-cols-1 xl:grid-cols-2 gap-6\">\n        <ThreatLevelIndicator />\n        <NetworkStatus />\n      </div>\n\n      {/* Métriques de sécurité */}\n      <Card>\n        <CardHeader>\n          <CardTitle>Métriques de Sécurité en Temps Réel</CardTitle>\n          <CardDescription>Indicateurs clés de performance sécuritaire</CardDescription>\n        </CardHeader>\n        <CardContent>\n          <SecurityMetricsGrid />\n        </CardContent>\n      </Card>\n\n      {/* Alertes récentes */}\n      <Card>\n        <CardHeader>\n          <CardTitle className=\"flex items-center gap-2\">\n            <Bell className=\"h-5 w-5\" />\n            Alertes Récentes\n          </CardTitle>\n          <CardDescription>Dernières menaces détectées par nos systèmes OSINT</CardDescription>\n        </CardHeader>\n        <CardContent>\n          <div className=\"space-y-4\">\n            {mockAlerts.map((alert, index) => (\n              <ThreatAlertCard key={index} alert={alert} />\n            ))}\n          </div>\n        </CardContent>\n      </Card>\n\n      {/* Avertissement de simulation */}\n      <Card className=\"border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20\">\n        <CardHeader className=\"pb-3\">\n          <CardTitle className=\"text-amber-800 dark:text-amber-200 flex items-center gap-2\">\n            <Timer className=\"h-4 w-4\" />\n            Simulation de Monitoring\n          </CardTitle>\n        </CardHeader>\n        <CardContent>\n          <p className=\"text-sm text-amber-700 dark:text-amber-300\">\n            <strong>Note:</strong> Cette section présente une simulation de monitoring en temps réel basée \n            sur les tendances observées dans le rapport OSINT. Dans un environnement opérationnel, \n            ces données seraient alimentées par des sources de threat intelligence en direct et des \n            systèmes SIEM industriels.\n          </p>\n        </CardContent>\n      </Card>\n    </div>\n  );\n}