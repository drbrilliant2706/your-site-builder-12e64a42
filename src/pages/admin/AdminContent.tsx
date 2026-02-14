import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

const defaultServices: ServiceItem[] = [
  { title: "AI Solutions", description: "Leverage artificial intelligence to transform your business.", image: "/assets/service-ai.jpg" },
  { title: "Cloud Services", description: "Scalable and secure cloud infrastructure.", image: "/assets/service-cloud.jpg" },
  { title: "Data Analytics", description: "Turn data into actionable insights.", image: "/assets/service-data.jpg" },
  { title: "Cybersecurity", description: "Protect your digital assets.", image: "/assets/service-security.jpg" },
];

const defaultTestimonials: TestimonialItem[] = [
  { name: "John Doe", role: "CEO, TechCorp", text: "Excellent service and support." },
  { name: "Jane Smith", role: "CTO, Innovate Inc", text: "Transformed our digital infrastructure." },
  { name: "Ahmed Ali", role: "Director, Gulf Tech", text: "Reliable partner for cloud solutions." },
];

export default function AdminContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "homepage";

  // Homepage state
  const [heroTitle, setHeroTitle] = useState("");
  const [heroDesc, setHeroDesc] = useState("");
  const [weDoIntro, setWeDoIntro] = useState("");
  const [aboutIntro, setAboutIntro] = useState("");

  // Services state
  const [services, setServices] = useState<ServiceItem[]>([]);

  // Testimonials state
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);

  // Settings state
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [copyright, setCopyright] = useState("");

  useEffect(() => {
    // Load from localStorage
    setHeroTitle(localStorage.getItem("cms_heroTitle") || "");
    setHeroDesc(localStorage.getItem("cms_heroDesc") || "");
    setWeDoIntro(localStorage.getItem("cms_weDoIntro") || "");
    setAboutIntro(localStorage.getItem("cms_aboutIntro") || "");

    const savedServices = localStorage.getItem("cms_services");
    setServices(savedServices ? JSON.parse(savedServices) : defaultServices);

    const savedTestimonials = localStorage.getItem("cms_testimonials");
    setTestimonials(savedTestimonials ? JSON.parse(savedTestimonials) : defaultTestimonials);

    setAddress(localStorage.getItem("cms_address") || "");
    setPhone(localStorage.getItem("cms_phone") || "");
    setEmail(localStorage.getItem("cms_email") || "");
    setCopyright(localStorage.getItem("cms_copyright") || "");
  }, []);

  const saveHomepage = () => {
    localStorage.setItem("cms_heroTitle", heroTitle);
    localStorage.setItem("cms_heroDesc", heroDesc);
    localStorage.setItem("cms_weDoIntro", weDoIntro);
    localStorage.setItem("cms_aboutIntro", aboutIntro);
    toast.success("Homepage content saved!");
  };

  const saveServices = () => {
    localStorage.setItem("cms_services", JSON.stringify(services));
    toast.success("Services saved!");
  };

  const saveTestimonials = () => {
    localStorage.setItem("cms_testimonials", JSON.stringify(testimonials));
    toast.success("Testimonials saved!");
  };

  const saveSettings = () => {
    localStorage.setItem("cms_address", address);
    localStorage.setItem("cms_phone", phone);
    localStorage.setItem("cms_email", email);
    localStorage.setItem("cms_copyright", copyright);
    toast.success("Settings saved!");
  };

  const updateService = (index: number, field: keyof ServiceItem, value: string) => {
    setServices((prev) => prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
  };

  const addService = () => {
    setServices((prev) => [...prev, { title: "", description: "", image: "" }]);
  };

  const removeService = (index: number) => {
    setServices((prev) => prev.filter((_, i) => i !== index));
  };

  const updateTestimonial = (index: number, field: keyof TestimonialItem, value: string) => {
    setTestimonials((prev) => prev.map((t, i) => (i === index ? { ...t, [field]: value } : t)));
  };

  const addTestimonial = () => {
    setTestimonials((prev) => [...prev, { name: "", role: "", text: "" }]);
  };

  const removeTestimonial = (index: number) => {
    setTestimonials((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <Tabs value={currentTab} onValueChange={(val) => setSearchParams({ tab: val })}>
        <TabsList className="mb-4">
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Homepage Tab */}
        <TabsContent value="homepage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-['Rajdhani'] text-xl">Hero / Banner</CardTitle>
              <p className="text-sm text-muted-foreground">
                First slide headline and description.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heroTitle">Slide 1 – Title</Label>
                <Input
                  id="heroTitle"
                  placeholder="Innovating with AI & Cloud"
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroDesc">Slide 1 – Description</Label>
                <Textarea
                  id="heroDesc"
                  rows={3}
                  placeholder="We deliver AI, cloud and automation solutions..."
                  value={heroDesc}
                  onChange={(e) => setHeroDesc(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-['Rajdhani'] text-xl">What we do – Intro</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="weDoIntro">Intro text</Label>
                <Textarea
                  id="weDoIntro"
                  rows={2}
                  placeholder="We design and deliver end-to-end digital transformation solutions."
                  value={weDoIntro}
                  onChange={(e) => setWeDoIntro(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-['Rajdhani'] text-xl">About section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="aboutIntro">About intro text</Label>
                <Textarea
                  id="aboutIntro"
                  rows={3}
                  placeholder="We design and deliver end-to-end digital transformation solutions—strategy, cloud, data, and automation..."
                  value={aboutIntro}
                  onChange={(e) => setAboutIntro(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Button onClick={saveHomepage}>Save homepage</Button>
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-['Rajdhani'] text-xl">Services</CardTitle>
              <p className="text-sm text-muted-foreground">
                Edit titles and descriptions. Image paths are relative to the main site.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="space-y-3 p-4 rounded-lg border border-border bg-muted/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      Service {index + 1}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive"
                      onClick={() => removeService(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      value={service.title}
                      onChange={(e) => updateService(index, "title", e.target.value)}
                      placeholder="Service title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      value={service.description}
                      onChange={(e) => updateService(index, "description", e.target.value)}
                      rows={2}
                      placeholder="Service description"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Image path</Label>
                    <Input
                      value={service.image}
                      onChange={(e) => updateService(index, "image", e.target.value)}
                      placeholder="/assets/service-image.jpg"
                    />
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <Button variant="outline" onClick={addService}>
                  <Plus className="mr-2 h-4 w-4" /> Add service
                </Button>
                <Button onClick={saveServices}>Save all services</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Testimonials Tab */}
        <TabsContent value="testimonials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-['Rajdhani'] text-xl">Testimonials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="space-y-3 p-4 rounded-lg border border-border bg-muted/30">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      Testimonial {index + 1}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive"
                      onClick={() => removeTestimonial(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>Name</Label>
                      <Input
                        value={testimonial.name}
                        onChange={(e) => updateTestimonial(index, "name", e.target.value)}
                        placeholder="Full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Role</Label>
                      <Input
                        value={testimonial.role}
                        onChange={(e) => updateTestimonial(index, "role", e.target.value)}
                        placeholder="CEO, Company"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Testimonial text</Label>
                    <Textarea
                      value={testimonial.text}
                      onChange={(e) => updateTestimonial(index, "text", e.target.value)}
                      rows={2}
                      placeholder="What they said..."
                    />
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <Button variant="outline" onClick={addTestimonial}>
                  <Plus className="mr-2 h-4 w-4" /> Add testimonial
                </Button>
                <Button onClick={saveTestimonials}>Save all testimonials</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-['Rajdhani'] text-xl">Contact / Company info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Sapphire Tower, Dubai, UAE"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="+971 522 900 966"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="settingEmail">Email</Label>
                <Input
                  id="settingEmail"
                  type="email"
                  placeholder="Info@tekvion.ae"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="copyrightText">Copyright text</Label>
                <Input
                  id="copyrightText"
                  placeholder="© 2026 All Rights Reserved. TekVion Technologies"
                  value={copyright}
                  onChange={(e) => setCopyright(e.target.value)}
                />
              </div>
              <Button onClick={saveSettings}>Save settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
