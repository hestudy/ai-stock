import Input from "@/components/form/Input";
import Submit from "@/components/form/Submit";
import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./context";

export const { useAppForm, withForm } = createFormHook({
  fieldContext: fieldContext,
  formContext: formContext,
  fieldComponents: {
    Input,
  },
  formComponents: {
    Submit,
  },
});
