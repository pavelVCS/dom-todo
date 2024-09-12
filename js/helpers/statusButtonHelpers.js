function getStatusButtonLabel(status) {
  switch (status) {
    case 'created':
      return 'Start';
    case 'started':
      return 'Stop';
    case 'completed':
      return '';
    default:
      return '';
  }
}

export { getStatusButtonLabel };
