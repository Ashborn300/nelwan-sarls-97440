import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Youtube } from "lucide-react";

const SocialCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Facebook Card */}
          <Card className="hover-lift bg-card border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Rejoignez notre communauté
              </h3>
              <p className="text-muted-foreground mb-6">
                Suivez nos actualités, projets et conseils sur Facebook
              </p>
              <Button 
                variant="construction" 
                size="lg"
                className="w-full"
                onClick={() => window.open("https://www.facebook.com/profile.php?id=100063941894659", "_blank")}
              >
                <Facebook className="mr-2 h-5 w-5" />
                S'abonner à notre page Facebook
              </Button>
            </CardContent>
          </Card>

          {/* YouTube Card */}
          <Card className="hover-lift bg-card border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Youtube className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Découvrez nos réalisations
              </h3>
              <p className="text-muted-foreground mb-6">
                Vidéos exclusives de nos projets et tutoriels
              </p>
              <Button 
                variant="destructive" 
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={() => window.open("https://youtube.com/@nelwan-construction?si=qh0i61ALLTw6E_qx", "_blank")}
              >
                <Youtube className="mr-2 h-5 w-5" />
                Nous suivre sur YouTube
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialCTA;
