import { useFormContext } from "@/hooks/form/context";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { memo, type ComponentProps } from "react";
import { Button } from "../ui/button";
const Submit = memo((props: ComponentProps<typeof Button>) => {
  const form = useFormContext();
  return (
    <Button
      {...props}
      type="submit"
      disabled={form.state.isSubmitting}
      className={cn(props.className, "group")}
    >
      <Loader2 className="animate-spin hidden group-disabled:block" />
      {props.children}
    </Button>
  );
});

export default Submit;
