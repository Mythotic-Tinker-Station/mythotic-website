import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import { UserData } from "../../model/UserData";

interface UserProps {
    open?: any
    onClick?: any
    onClose?: any
}

export default class LoginPage extends Component<UserProps, UserData> {
    constructor(props: UserProps) {
        super(props)

        this.state = {
            id: 0,
            user_name: "",
            password: "",
            email_address: ""
        }

    
    }

    render() {

        return(
            <Dialog open={this.props.open} onClose={this.props.onClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    Login to edit the site
                </DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="user_name"
                    label="User Name"
                    type="username"
                    fullWidth
                />
                <DialogActions>
                <Button onClick={this.props.onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={this.props.onClose} color="primary">
                    Subscribe
                </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

/* export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
 */
