import { Button } from "@/components/ui/button";
import {
  DocsCard,
  DocsDescription,
  DocsTemplate,
  DocsWrapper,
} from "../layout/docs/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DialogPage = () => {
  return (
    <DocsTemplate docTitle="Dialog">
      <DocsDescription>
        A dialog is a window overlaid on either the primary window or another
        dialog window.
      </DocsDescription>

      <DocsWrapper>
        <DocsCard
          title="Default"
          scope={{
            Dialog,
            DialogTrigger,
            DialogContent,
            DialogDescription,
            DialogHeader,
            DialogTitle,
            Button,
          }}
          code={`
            <Dialog>
              <DialogTrigger asChild>
                <Button className="max-w-36">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          `}
        />
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default DialogPage;
