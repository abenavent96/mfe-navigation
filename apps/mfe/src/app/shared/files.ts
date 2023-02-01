import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function downloadFile(file: string | Blob, name: string, open?: boolean) {
  if (typeof document === 'undefined') { return; }
  if (typeof window === 'undefined') { return; }
  if (file instanceof Blob) { file = URL.createObjectURL(file); }
  const link = document.createElement('a');
  link.href = file;
  if (!open) { link.download = name; }
  if (open) { link.setAttribute('target', '_blank'); }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function openExternalLink(url: string) {
  if (typeof document === 'undefined') { return; }
  if (typeof window === 'undefined') { return; }
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('target', '_blank');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function readFileAsBase64(file: File | Blob): Observable<string> {
  return new Observable(obs => {
    const reader = new FileReader();
    reader.onerror = err => obs.error(err);
    reader.onabort = err => obs.error(err);
    reader.onload = () => {
      const base64WithMetadata = reader.result as string;
      let encoded = base64WithMetadata.replace(/^data:(.*;base64,)?/, '');
      if ((encoded.length % 4) > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4));
      }
      obs.next(encoded);
    };
    reader.onloadend = () => obs.complete();
    return reader.readAsDataURL(file);
  });
}

export function readFileAsBase64WithMetadata(file: File | Blob) {
  return readFileAsBase64(file).pipe(
    map(data => ({ data, type: file.type }))
  );
}

export function getExtensionFromMimeType(mimeType: string) {
  if (!mimeType) { return ''; }
  const res = /.*\/(.*)/.exec(mimeType);
  return res && res.length === 2 ? res[1] : '';
}

export function base64ToBlob(base64: any, type: any) {
  const byteString = atob(base64);
  const content = [];
  for (let i = 0; i < byteString.length; i++) { content[i] = byteString.charCodeAt(i); }
  return new Blob([new Uint8Array(content)], {type});
}
