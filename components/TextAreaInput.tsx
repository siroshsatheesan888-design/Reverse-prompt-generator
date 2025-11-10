
import React from 'react';

interface TextAreaInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="w-full">
      <label htmlFor="input-text" className="sr-only">
        Input Text
      </label>
      <textarea
        id="input-text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={12}
        className="w-full p-4 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 resize-y shadow-inner"
      />
    </div>
  );
};

export default TextAreaInput;
