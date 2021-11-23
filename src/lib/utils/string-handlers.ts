export function colorStyler<T extends { id:string} | null>(el: T | undefined) {
  return el ? { color: +el.id.substring(4) >= 800 ? '#FFA570' : '#bde0fe' }
    : undefined;
}

export function classSelector<T extends { id:string} | null>(params: T | undefined, styles: {
	readonly [key: string]: string;
}) {
  return `${styles.owf} ${params && styles[params.id]} ${styles.weatherIcon}`;
}
