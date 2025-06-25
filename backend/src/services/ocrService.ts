import Tesseract from 'tesseract.js';

export class OcrService {
    async recognizeText(imagePath: string): Promise<string> {
        try {
            const { data: { text } } = await Tesseract.recognize(imagePath, 'eng', {
                logger: info => console.log(info)
            });
            return text;
        } catch (error) {
            console.error('Error during OCR processing:', error);
            throw new Error('OCR processing failed');
        }
    }
}