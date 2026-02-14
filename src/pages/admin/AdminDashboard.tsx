import { useNavigate } from "react-router-dom";
import { FileText, Grid3X3, Quote, Mail, FileEdit, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Pages", value: "5", icon: FileText, color: "bg-primary/10 text-primary" },
  { label: "Services", value: "8", icon: Grid3X3, color: "bg-accent/10 text-accent" },
  { label: "Testimonials", value: "3", icon: Quote, color: "bg-green-500/10 text-green-600" },
  { label: "Contact messages", value: "—", icon: Mail, color: "bg-purple-500/10 text-purple-600" },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 p-5">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick actions */}
      <Card>
        <CardHeader>
          <CardTitle className="font-['Rajdhani'] text-xl">Quick actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => navigate("/admin/content")}>
              <FileEdit className="mr-2 h-4 w-4" /> Edit homepage content
            </Button>
            <Button variant="secondary" onClick={() => navigate("/admin/content?tab=services")}>
              <Grid3X3 className="mr-2 h-4 w-4" /> Manage services
            </Button>
            <Button variant="secondary" onClick={() => navigate("/admin/content?tab=testimonials")}>
              <Quote className="mr-2 h-4 w-4" /> Manage testimonials
            </Button>
            <Button variant="secondary" onClick={() => navigate("/admin/content?tab=settings")}>
              <Settings className="mr-2 h-4 w-4" /> Site settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent activity */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-['Rajdhani'] text-xl">Recent activity</CardTitle>
          <Button variant="outline" size="sm" onClick={() => navigate("/admin/content")}>
            View all
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            No recent activity. Content is stored in your browser (localStorage) for this demo. Connect a backend to persist changes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
