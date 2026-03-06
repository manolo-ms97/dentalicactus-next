"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Props {
  lang: "es" | "en";
  dictionary: any;
}

export default function ContactClient({ lang, dictionary }: Props) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      toast({
        title: lang === "es" ? "¡Mensaje enviado!" : "Message sent!",
        description:
          lang === "es"
            ? "Nos pondremos en contacto contigo pronto."
            : "We will get in touch with you soon.",
      });
    }, 1000);
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        {lang === "es" ? "Envíanos un mensaje" : "Send us a message"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid sm:grid-cols-2 gap-4">

          <div className="space-y-2">
            <label className="text-sm font-medium">
              {dictionary.contact.name}
            </label>
            <Input required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              {dictionary.contact.phone}
            </label>
            <Input required type="tel" />
          </div>

        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            {dictionary.contact.email}
          </label>
          <Input required type="email" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            {dictionary.contact.message}
          </label>
          <Textarea required className="min-h-[150px]" />
        </div>

        <Button type="submit" size="lg" className="w-full">
          {isSubmitting ? (
            lang === "es" ? "Enviando..." : "Sending..."
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              {dictionary.contact.send}
            </span>
          )}
        </Button>

      </form>
    </div>
  );
}