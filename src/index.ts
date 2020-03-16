import aw1 from '@mmstudio/aw000001';

/**
 * 调用组件事件
 * @param no 被调用的组件编号
 * @param event_name 被调用组件的事件名
 * @param args 参数
 */
export default function fire<T>(no: string, event_name: string, ...args: unknown[]) {
	const node = document.querySelector<HTMLElement>(no);
	if (!node) {
		throw new Error(`could not find component:[${no}]`);
	} else {
		return (node as unknown as { mm: aw1 }).mm.emit<T>(event_name, ...args);
	}
}
