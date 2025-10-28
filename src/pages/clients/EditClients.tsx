import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Pencil } from "lucide-react";
import { ClientForm, ClientFormValues } from "./FormClients";

interface DialogEditClientProps {
  client: ClientFormValues & { id: string };
}

export function DialogEditClient({ client }: DialogEditClientProps) {
  const [open, setOpen] = useState(false);

  async function handleSubmit(values: ClientFormValues) {
    try {
      const response = await fetch(`/api/clients/${client.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Erro ao atualizar");

      toast.success("Cliente atualizado!");
      setOpen(false);
    } catch {
      toast.error("Falha ao atualizar cliente");
    }
  }

  return (
    <>

    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => console.log('Editar fatura INV001')} 
                className="h-8 w-8"
            >
                <Pencil className="h-4 w-4" /> 
            </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Cliente</DialogTitle>
        </DialogHeader>

        <ClientForm
          defaultValues={client}
          onSubmit={handleSubmit}
          submitLabel="Atualizar"
        />
      </DialogContent>
    </Dialog>
    </>
  );
}