import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    color: #555;
`;

const LanguageTranslator = () => {
    const [text, setText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('pt');
    const [translatedText, setTranslatedText] = useState('');
    const [loading, setLoading] = useState(false);

    const translate = async () => {

        try {
            setTranslatedText(response.data.responseData.translatedText);
        } catch (error) {
            console.error("Erro ao traduzir o texto", error);
        }
        
        return (
            <Container>
                <Title>Language Translator</Title>
                <div>
                    <Label>Source Language:</Label>
                    <select value={sourceLanguage} onChange={(event) => setSourceLanguage(event.target.value)}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="pt">Portuguese</option>
                        <option value="fr">French</option>
                    </select>
                </div>
        
                <div>
                    <Label>Target Language:</Label>
                    <select value={targetLanguage} onChange={(event) => setTargetLanguage(event.target.value)}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="pt">Portuguese</option>
                        <option value="fr">French</option>
                    </select>
                </div>
            </Container>
        );

    };

    export default LanguageTranslator;

