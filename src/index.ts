import filterObj from 'filter-obj';

type AllowedTypes = string | number | Function;
// We take the keys of P and if T[P] is a Function we type P as P (the string literal type for the key), otherwise we type it as never.
// Then we index by keyof T, never will be removed from the union of types, leaving just the property keys that were not typed as never
type MethodKeys<T> = {
  [P in keyof T]: T[P] extends AllowedTypes ? P : never;
}[keyof T];
type Methods<T> = Pick<T, MethodKeys<T>>;

/**
 * CreateObj
 *
 * @param obj value of object need to recreate
 */
export function CreateObj<ObjectType>(obj: ObjectType): Methods<ObjectType> {
  return filterObj(obj, (_, value) => Boolean(value)) as Methods<ObjectType>;
}
