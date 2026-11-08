import davidyero from 'eslint-config-davidyero/web';

// Preset compartido del ecosistema, en modo aviso hasta que el repo llegue a
// cero avisos; entonces, `davidyero({ strict: true })`.
export default davidyero({ extraIgnores: ['build/**'] });
