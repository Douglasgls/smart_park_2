import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Trash } from "lucide-react";
import { toast } from "sonner";



export function DialogDeleteClients( { clientId }: { clientId: string } ) {

   async function handleDelete(event: React.FormEvent) {
      try {
      const response = await fetch("/api/clients", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: clientId }),
      });

      if (!response.ok) throw new Error("Erro ao deletar cliente");

      toast.success("Cliente deletado com sucesso!");
    } catch {
      toast.error("Falha ao deletar cliente. Tente novamente.");
    }
   } 

  return (
    <Dialog>
      <form onSubmit={handleDelete}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => console.log("Editar fatura INV001")}
                className="h-8 w-8"
            >
                <Trash className="h-4 w-4" /> 
            </Button>
        </DialogTrigger>
        
        <DialogContent className="w-80 h-min md:w-full md:max-w-md">
          <DialogHeader>
            <DialogTitle>Deletar Cliente</DialogTitle>
            <DialogDescription>
             Tem certeza que deseja deletar este cliente? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-red-500 text-white">Deletar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}