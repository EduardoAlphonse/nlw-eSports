import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
  return (
    <div className="bg-nlw-gradient pt-1 mt-8 self-stretch rounded-lg overflow-hidden">
      <div className="w-full bg-[#2A2634] px-8 py-6 rounded-md flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block leading-relaxed">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 leading-relaxed">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="px-3 py-4 bg-violet-500 hover:bg-violet-600 text-white font-medium rounded-md flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
