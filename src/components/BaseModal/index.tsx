
import { ContainerModal, Overlay } from './styles'

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: |React.ReactNode;
    title: string;
}

const BaseModal = ({  children, title, isOpen, onClose }: Props) => {


    return (
        <Overlay $isOpen={true} onClick={onClose}>
            <ContainerModal onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                {children}
            </ContainerModal>
        </Overlay>
    )
}

export default BaseModal;