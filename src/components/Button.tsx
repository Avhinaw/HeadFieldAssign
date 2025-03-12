interface ButtonProp{
  text: string
}
const Button: React.FC<ButtonProp> = ({text}) => {
  return (
    <div className="px-4">
        <a
            href="/home"
            className="inline-block text-yellow-500 border font-bold py-1 px-5 rounded-4xl hover:-scale-105"
          >
            {text}
          </a>
    </div>
  )
}

export default Button