import { SheetsManager } from 'jss';

const manager = new SheetsManager();


class Theme {
    updateStylesheets() {
        manager.sheets.forEach((sheet) => {
            sheet.update(this);
        });
    }

    _foreground = '#000';
    get foreground() {
        return this._foreground;
    }

    set foreground(value) {
        this._foreground = value;
        this.updateStylesheets();
    }

    _background = '#fff';
    get background() {
        return this._background;
    }

    set background(value) {
        this._background = value;
        this.updateStylesheets();
    }

    _accent = '#0069ba';
    get accent() {
        console.log('accent got');
        return this._accent;
    }

    set accent(value) {
        this._accent = value;
        this.updateStylesheets();
    }
}

const theme = new Theme();
export default manager;

export { theme };
