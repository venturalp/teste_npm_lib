const defaultStyles = {
  error: ['color:#fff', 'background-color:#ff0000', 'font-size:20px'].join(';')
};

export const error = (msg, style = defaultStyles) => {
  console.error(`%c${msg}`, style.error);
};

export default { error };
