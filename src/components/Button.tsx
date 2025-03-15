interface ButtonProp{
  text: string
}
const Button: React.FC<ButtonProp> = ({text}) => {
  return (
    <div className="px-4 lg:px-0">
        <a
            href="/"
            className="inline-block text-yellow-500 border font-bold py-1 px-5 rounded-4xl hover:border-yellow-700 hover:text-white hover:bg-yellow-700"
          >
            {text}
          </a>
    </div>
  )
}

export default Button