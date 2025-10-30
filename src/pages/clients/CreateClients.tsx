import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ClientForm, ClientFormValues } from "./FormClients";
import {PlusCircle } from "lucide-react";

export function DialogCreateClients() {
  const [open, setOpen] = useState(false);

  async function handleSubmit(values: ClientFormValues) {
    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Erro ao criar cliente");

      toast.success("Cliente criado com sucesso!");
      setOpen(false);
    } catch {
      toast.error("Falha ao criar cliente. Tente novamente.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="inline-flex items-center gap-2 shadow-sm">
          <PlusCircle className="w-4 h-4" />
          Adicionar Cliente
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar Cliente</DialogTitle>
        </DialogHeader>

        <ClientForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}