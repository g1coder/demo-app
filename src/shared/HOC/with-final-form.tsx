import {ValidationErrors} from 'final-form';
import {ComponentType} from 'react';
import {Form, FormProps, FormRenderProps} from 'react-final-form';

const emptyHandler = () => {}

export function withFinalForm<IProps extends FormProps<FormValues>, FormValues = Record<string, unknown>>(
  Component: ComponentType<IProps & FormRenderProps<FormValues>>,
  validate?: (values: FormValues) => ValidationErrors | Promise<ValidationErrors>
) {
  return (props: IProps & {initialValues?: FormValues}) => (
    <Form<FormValues>
      {...props}
      validate={validate}
      onSubmit={props.onSubmit || emptyHandler}
      render={(formProps) => {
        return <Component {...props} {...formProps} onSubmit={formProps.handleSubmit} />;
      }}
    />
  );
}
