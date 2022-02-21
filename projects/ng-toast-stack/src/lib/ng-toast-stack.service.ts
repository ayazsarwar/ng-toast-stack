import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgToastStackService {
  id: number = 0;
  toastsBag: Array<NgToastStackType> = []

  constructor() { }

  push(data: NgToastStackType | string) {
    if (typeof data === 'string') data = <NgToastStackType>{ msg: data }
    data.id = ++this.id;
    const toast = new NgToastStack(data)
    this.toastsBag.push(toast);

    if (toast.autoClose) {
      toast.timerRef = new Timer(() => {
        this.pop(toast.id);
      }, toast.autoCloseTimer);

      let index = this.toastsBag.findIndex((n) => n.id === toast.id);
      this.toastsBag.splice(index, 1, toast);
    }
  }

  pop(id?: number) {
    if (!id) return;
    let index = this.toastsBag.findIndex((n) => n.id == id);
    this.toastsBag.splice(index, 1);
  }

  // Sugared methods

  pushStatic(data: NgToastStackType | string) {
    if (typeof data === 'string') {
      data = <NgToastStackType>{ msg: data, autoClose: false }
      this.push(data)
    } else {
      this.push({ ...data, autoClose: false })
    }
  }

  success(data: NgToastStackType | string) {
    if (typeof data === 'string') {
      data = <NgToastStackType>{ msg: data, type: 'success' }
      this.push(data)
    } else {
      this.push({ ...data, type: 'success' })
    }
  }

  error(data: NgToastStackType | string) {
    if (typeof data === 'string') {
      data = <NgToastStackType>{ msg: data, type: 'error' }
      this.push(data)
    } else {
      this.push({ ...data, type: 'error' })
    }
  }

}

export interface NgToastStackType {
  id?: number;
  type?: string;
  title?: string;
  msg: string;
  autoClose?: boolean;
  autoCloseTimer?: number;
  timerRef?: any;
  timerWidth?: any;
  icon?: string | boolean
}

export class NgToastStack {
  id: number
  type: string
  title: string
  msg: string
  autoClose: boolean
  autoCloseTimer: number
  timerRef?: any
  icon?: string | boolean

  constructor(data: NgToastStackType) {
    this.id = data.id || 5000
    this.type = data.type || 'success'
    this.title = this.getTitle(data)
    this.msg = data.msg
    this.autoClose = (data.hasOwnProperty('autoClose') && data.autoClose !== undefined) ? data.autoClose : true
    this.autoCloseTimer = data.autoCloseTimer || 5000
    this.icon = (data.hasOwnProperty('icon') && data.icon !== undefined) ? data.icon : true
  }

  getTitle(data: NgToastStackType) {
    if (!data.title && data.type == 'error') return 'Error';
    if (!data.title && (!data.type || data.type == 'success')) return 'Success';
    return data.title || 'Message';
  }
}

// Custom Timer with resume/pause
export class Timer {
  timeoutId: number | undefined
  intervalId: number | undefined
  delay: number = 0
  start: number = 0
  remaining: number = 0
  remainingPercentage: number = 100
  callback: any

  constructor(callback: any, delay: number) {
    this.delay = delay
    this.remaining = delay
    this.callback = callback
    this.resume()
  }

  pause() {
    window.clearTimeout(this.timeoutId)
    this.timeoutId = undefined
    window.clearInterval(this.intervalId)
    this.intervalId = undefined
  }

  resume() {
    if (this.timeoutId && this.intervalId) {
      return;
    }

    this.start = Date.now();
    this.timeoutId = window.setTimeout(this.callback, this.remaining);
    this.intervalId = window.setInterval(() => {
      if (this.remaining <= 0) window.clearInterval(this.intervalId)
      this.remaining -= 10;
      this.remainingPercentage = (this.remaining * 100) / this.delay
    }, 10)
  }
}