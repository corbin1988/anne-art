interface TitleProps {
  children: String;
  className?: String;
}
export const H1 = (props: TitleProps) => {
  return <h1 className={`${props.className} font-medium leading-tight text-5xl mt-0 mb-2`}>{props.children}</h1>
}

export const H2 = (props: TitleProps) => {
  return <h2 className={`${props.className} font-medium leading-tight text-4xl mt-0 mb-2`}>{props.children}</h2>
}

export const H3 = (props: TitleProps) => {
  return <h3 className={`${props.className} font-medium leading-tight text-3xl mt-0 mb-2`}>{props.children}</h3>
}

export const H4 = (props: TitleProps) => {
  return <h4 className={`${props.className} font-medium leading-tight text-2xl mt-0 mb-2`}>{props.children}</h4>
}

export const H5 = (props: TitleProps) => {
  return <h5 className={`${props.className} font-medium leading-tight text-1xl mt-0 mb-2`}>{props.children}</h5>
}

export const H6 = (props: TitleProps) => {
  return <h6 className={`${props.className} font-medium leading-tight text-0xl mt-0 mb-2`}>{props.children}</h6>
}