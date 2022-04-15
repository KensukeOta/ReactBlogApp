export const Label = (props: any) => {
  return (
    <label htmlFor={props.for}>{props.children}</label>
  );
};