import React from 'react';
import {Button} from 'react-native-paper';
import {Modal} from 'react-native';
import {
  ModalBackground,
  ModalCard,
  ModalContainer,
  ModalTextInput,
  ModalTitle,
} from './styled';

interface SingleInputModalProps {
  modalOpen: boolean;
  onRequestClose: () => void;
  title: string;
  inputPlaceholder: string;
  onInputTextChange: (text: string) => void;
  inputText: string;
  buttonIcon: string;
  onButtonPress: () => void;
  buttonDisabled: boolean;
  buttonText: string;
  loading: boolean;
}

const SingleInputModal: React.FC<SingleInputModalProps> = ({
  modalOpen,
  onRequestClose,
  title,
  inputPlaceholder,
  onInputTextChange,
  inputText,
  buttonIcon,
  onButtonPress,
  buttonDisabled,
  buttonText,
  loading,
}) => {
  return (
    <Modal
      visible={modalOpen}
      onRequestClose={onRequestClose}
      animationType="slide"
      transparent={true}>
      <ModalContainer>
        <ModalBackground onPress={onRequestClose} />
        <ModalCard>
          <ModalTitle>{title}</ModalTitle>
          <ModalTextInput
            label={inputPlaceholder}
            value={inputText}
            onChangeText={onInputTextChange}
          />
          <Button
            icon={buttonIcon}
            mode="contained"
            onPress={onButtonPress}
            disabled={buttonDisabled}
            loading={loading}>
            {buttonText}
          </Button>
        </ModalCard>
      </ModalContainer>
    </Modal>
  );
};

export default SingleInputModal;
