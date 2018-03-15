import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AppConfig } from '../../../app.config';
import { CollectionService } from '../../../_services/collection/collection.service';

@Component({
    selector: 'app-rsvp-dialog',
    templateUrl: './show-rsvp-dialog.component.html',
    styleUrls: ['./show-rsvp-dialog.component.scss']
})
export class ShowRSVPPopupComponent implements OnInit {

    public userType = 'public';
    public experienceId = '';
    public hasChanged = false;
    public loadingRsvpDetail = false;
    constructor(public dialogRef: MatDialogRef<ShowRSVPPopupComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public config: AppConfig,
                private dialog: MatDialog,
                public _collectionService: CollectionService
    ) { }

    ngOnInit() {
    }

    /**
     * markAbsent
     */
    public markPresence(attendie, isPresent) {
        let paramIsPresent = false;
        if (isPresent ) {
            paramIsPresent = true;
        }
        this._collectionService.markPresence(attendie.id, attendie.rsvpId, paramIsPresent).subscribe((response) => {
            this.hasChanged = true;
            console.log('removed rsvp');
        });
    }

    closeDialog() {
        this.dialogRef.close(this.hasChanged);
    }

}
