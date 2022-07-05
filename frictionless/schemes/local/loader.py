# type: ignore
import io
from .control import LocalControl
from ...resource import Loader
from ... import helpers


class LocalLoader(Loader):
    """Local loader implementation."""

    # Read

    def read_byte_stream_create(self):
        control = self.resource.dialect.get_control("local", ensure=LocalControl())
        scheme = "file://"
        fullpath = self.resource.fullpath
        if fullpath.startswith(scheme):
            fullpath = fullpath.replace(scheme, "", 1)
        byte_stream = io.open(fullpath, "rb")
        return byte_stream

    # Write

    def write_byte_stream(self, path):
        helpers.move_file(path, self.resource.fullpath)
