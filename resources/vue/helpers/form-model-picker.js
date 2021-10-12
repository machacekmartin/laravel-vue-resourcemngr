import LinkFormModel from '../models/link-form-model'
import CodeFormModel from '../models/code-form-model'
import FileFormModel from '../models/file-form-model'

export function getFormModel(purpose){
    switch (purpose){
        case 'link':
            return LinkFormModel
        case 'code':
            return CodeFormModel
        case 'file':
            return FileFormModel
    }
}