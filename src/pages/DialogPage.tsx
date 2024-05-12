import {
  DocsCard,
  DocsDescription,
  DocsTemplate,
  DocsWrapper,
} from "../layout/docs/components";
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogCloseButton,
  Icon,
  DialogBody,
  DialogFooter,
} from "../packages";

const DialogPage = () => {
  return (
    <DocsTemplate docTitle="Button">
      <DocsDescription>
        Dialog is a window overlaid on either the primary window or another
        dialog window.
      </DocsDescription>

      <DocsWrapper>
        <DocsCard title="Default">
          <Dialog>
            <DialogTrigger>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>This is a title</DialogTitle>
                <DialogCloseButton>
                  <Icon icon="close" />
                </DialogCloseButton>
              </DialogHeader>
              <DialogBody>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Soluta libero magnam saepe neque consectetur numquam.
                </p>
              </DialogBody>
              <DialogFooter>
                <Button
                  onClick={() => alert("Add a function to execute")}
                  variant="bordered"
                >
                  Close
                </Button>
                <Button
                  onClick={() => alert("Add a function to execute")}
                  variant="solid"
                  color="primary"
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DocsCard>

        <DocsCard title="Only info">
          <Dialog>
            <DialogTrigger>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Info</DialogTitle>
                <DialogCloseButton>
                  <Icon icon="close" />
                </DialogCloseButton>
              </DialogHeader>
              <DialogBody>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam vero quia eius esse pariatur impedit!
                </p>
              </DialogBody>
            </DialogContent>
          </Dialog>
        </DocsCard>

        <DocsCard title="Expose parameters">
          <Dialog>
            {({ open, close }) => (
              <>
                <DialogTrigger onClick={open}>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>This is a title</DialogTitle>
                    <DialogCloseButton>
                      <Icon icon="close" />
                    </DialogCloseButton>
                  </DialogHeader>
                  <DialogBody>
                    <p>This is a dialog</p>
                  </DialogBody>
                  <DialogFooter>
                    <Button onClick={close} variant="bordered">
                      Cancel
                    </Button>
                    <Button onClick={() => alert("Clicked")} color="primary">
                      Confirm
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </>
            )}
          </Dialog>
        </DocsCard>
      </DocsWrapper>
    </DocsTemplate>
  );
};

export default DialogPage;
