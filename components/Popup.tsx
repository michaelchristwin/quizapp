import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface PopupProps {
  score?: number;
  children: React.ReactNode;
  total?: number;
}

function Popup({ children, score, total }: PopupProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed bg-neutral-900/90 inset-0 backdrop-blur z-[11]" />
        <AlertDialog.Content className="fixed focus:outline-none drop-shadow-md border z-[15] border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[90vh] w-full md:w-[90vw] md:max-w-[450px] translate-y-[-50%] translate-x-[-50%] rounded-md bg-black p-[25px]">
          <AlertDialog.Title>Popup</AlertDialog.Title>
          <AlertDialog.Description>
            This is a test popup
          </AlertDialog.Description>
          <p>
            Your Score is <b>{score}</b> out of <b>{total}</b>
          </p>
          <AlertDialog.Cancel></AlertDialog.Cancel>
          <AlertDialog.Cancel asChild>
            <button
              aria-label="close"
              className="absolute top-[10px] right-[10px] items-center flex justify-center h-[25px] w-[25px] hover:opacity-70 bg-blue-500 rounded-full"
            >
              <Cross2Icon />
            </button>
          </AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export default Popup;
