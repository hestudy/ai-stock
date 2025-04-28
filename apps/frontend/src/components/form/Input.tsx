import { useFieldContext } from "@/hooks/form/context";
import { isEmpty } from "lodash";
import { useMemo, type ComponentProps, type ReactNode } from "react";
import { Input as InputComponent } from "../ui/input";
import { Label } from "../ui/label";
const Input = ({
  label,
  ...props
}: { label?: ReactNode } & ComponentProps<typeof InputComponent>) => {
  const field = useFieldContext<string>();

  const errors = useMemo(() => {
    return field.state.meta.errors;
  }, [field.state.meta.errors]);

  return (
    <div className="space-y-2">
      {label && <Label htmlFor={field.name}>{label}</Label>}
      <InputComponent
        {...props}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
      {!isEmpty(errors) && (
        <div className="text-red-500 text-sm">{errors.join(",")}</div>
      )}
    </div>
  );
};

export default Input;
