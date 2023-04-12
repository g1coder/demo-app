import {noop} from 'lodash';
import {ComponentType} from 'react';
import {Form, FormProps, FormRenderProps} from 'react-final-form';
import {ValidationErrors} from 'final-form';

function withFinalForm<IProps extends FormProps<FormValues>, FormValues = Record<string, any>>(
  Component: ComponentType<IProps & FormRenderProps<FormValues>>,
  validate?: (values: FormValues) => ValidationErrors | Promise<ValidationErrors>
) {
  return (props: IProps & {initialValues?: FormValues}) => (
    <Form<FormValues>
      {...props}
      validate={validate}
      onSubmit={props.onSubmit || noop}
      render={(formProps) => {
        return <Component {...props} {...formProps} onSubmit={formProps.handleSubmit} />;
      }}
    />
  );
}

export default withFinalForm;