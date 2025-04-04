const handleDownloadCV = ({ fileName }: { fileName: string }): void => {
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default handleDownloadCV;