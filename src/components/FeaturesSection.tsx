
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-12 w-12 text-primary" />,
    title: "Инновационные идеи",
    description: "Мы предлагаем современные решения для развития вашего бизнеса."
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "Быстрая реализация",
    description: "Наша команда быстро воплощает идеи в жизнь с высоким качеством."
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Надежная поддержка",
    description: "Мы обеспечиваем надежную техническую поддержку 24/7."
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Почему наши клиенты выбирают именно нас
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader className="flex items-center justify-center pb-2">
                {feature.icon}
                <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
