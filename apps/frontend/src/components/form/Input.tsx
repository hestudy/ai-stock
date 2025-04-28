import { useFieldContext } from "@/hooks/form/context";
import { isEmpty } from "lodash";
import { memo, useMemo, type ComponentProps, type ReactNode } from "react";
import { Input as InputComponent } from "../ui/input";
import { Label } from "../ui/label";
const Input = memo(
  ({
    label,
    ...props
  }: { label?: ReactNode } & ComponentProps<typeof InputComponent>) => {
    const field = useFieldContext<string>();

    const errors = useMemo(() => {
      return field.state.meta.errors;
    }, [field.state.meta.errors]);

    return (
      <div className="space-y-2">
        {label && <Label>{label}</Label>}
        <InputComponent
          {...props}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
        />
        {!isEmpty(errors) && <div>{errors.join(",")}</div>}
      </div>
    );
  }
);

export default Input;
