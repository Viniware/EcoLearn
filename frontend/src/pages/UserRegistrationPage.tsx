import React, { useState, ChangeEvent, FormEvent } from 'react';
import './UserRegistrationPage.css';
import InputField from '../components/InputField';
import Button from '../components/Button';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const UserRegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem!');
      return;
    }

    alert('Cadastro realizado com sucesso!');
    setError('');
  };

  return (
    <div className="registration-page">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <InputField label="Nome" name="name" value={formData.name} onChange={handleChange} required />
        <InputField label="E-mail" name="email" value={formData.email} onChange={handleChange} type="email" required />
        <InputField label="Senha" name="password" value={formData.password} onChange={handleChange} type="password" required />
        <InputField label="Confirmar Senha" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type="password" required />
        {error && <p className="error-message">{error}</p>}
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
};

export default UserRegistrationPage;
