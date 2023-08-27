import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface PopupProps {
  score?: number;
  children: React.ReactNode;
  total?: number;
}

function Popup({ children, score, total }: PopupProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed bg-neutral-900/90 inset-0 backdrop-blur z-[11]" />
        <Dialog.Content className="fixed focus:outline-none drop-shadow-md border z-[15] border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[90vh] w-full md:w-[90vw] md:max-w-[450px] translate-y-[-50%] translate-x-[-50%] rounded-md bg-black p-[25px]">
          <Dialog.Title>Popup</Dialog.Title>
          <Dialog.Description>This is a test popup</Dialog.Description>
          <p>
            Your Score is <b>{score}</b> out of <b>{total}</b>
          </p>
          <Dialog.Close></Dialog.Close>
          <Dialog.Close asChild>
            <button
              aria-label="close"
              className="absolute top-[10px] right-[10px] items-center flex justify-center h-[25px] w-[25px] hover:opacity-70 bg-blue-500 rounded-full"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Popup;
