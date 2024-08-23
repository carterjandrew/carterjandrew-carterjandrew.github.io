import { useEffect } from "react"


const EmptyTrigger: React.FC<{
		trigger: () => void
}> = ({trigger}) => {
		useEffect(trigger, []) // Trigger our function upon mounting
		return <></>
}

export default EmptyTrigger
