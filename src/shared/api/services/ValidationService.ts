import _ from 'lodash';

type Errors<T> = {[key in keyof T]?: string};
type CrossFieldErrors<T> = Errors<T> & {[key in keyof T]?: Errors<T>};
type CrossFieldValidator<T> = (data: T, errors: Errors<T>, props?: unknown) => Errors<T>;

const isFalsy = (
  candidate: string | number | object | boolean | null | undefined
): candidate is null | undefined | '' => {
  return _([null, '', undefined] as Array<typeof candidate>).includes(candidate);
};

export function required(value) {
  const reqValue = _.isString(value) ? value.trim() : value;
  return isFalsy(reqValue) ? 'Required field' : undefined;
}

export function createValidator<T extends object>(
  rules: {[key in keyof T]?: Array<(value: T[keyof T], values: T) => string | undefined>},
  crossFieldValidator?: CrossFieldValidator<T>
): (data: T, props?: Record<string, unknown>) => CrossFieldErrors<T> {
  return (data, props?) => {
    const errors = {};
    _.each(rules, (validationRules, key) => {
      const error = _(validationRules)
        .map((r) => data && r(data[key], data))
        .filter((err) => !!err)
        .first();
      if (error) errors[key] = error;
    });

    if (crossFieldValidator) {
      return crossFieldValidator(data, errors, props);
    }
    return errors;
  };
}


function isValidEmail(value) {
  return (
    isFalsy(value) ||
    // eslint-disable-next-line
    /^(?=.{6,254}$)(?=.{1,64}@)([^@\s\.\(\)\[\]\{\}\\/,:;]+\.)*[^@\s\."\'\(\)\[\]\{\}\\/,:;]+@(((?=.{1,253}$)([^@\s"\'\(\)\[\]\{\}\\/,:;\.\-=+<>*!&?#%$]([^@\s"\'\(\)\[\]\{\}\\/,:;\.]*[^@\s"\'\(\)\[\]\{\}\\/,:;\.\-=+<>*!&?#%$]*)\.)+([^@\s"\'\(\)\[\]\{\}\\/,:;\.\-=+<>*!&?#%$][^@\s\."\'\(\)\[\]\{\}\\/,:;]*[^@\s"\'\(\)\[\]\{\}\\/,:;\.\-=+<>*!&?#%$]))|((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)))$/.test(
      value
    )
  );
}

export function email(value) {
  if (!isValidEmail(value)) {
    return 'Email is not valid';
  }
  return;
}
